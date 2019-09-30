const defaultState = {
  message: 'first thing'
}

const logger = (options) => (prevState, nextState) => {
  if (options.collapsed) console.groupCollapsed('state change')
  else console.group('state change')
  console.log('prev state: ', prevState)
  console.log('next state: ', nextState)
  console.groupEnd()
}

const middlewares = [logger({ collapsed: true })]

function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

class Store {

  constructor(initialState, middlewares = []) {
    this._state = initialState
    this._middlewares = middlewares
    this._subscribers = []
  }

  update(updater) {
    const prevState = JSON.parse(JSON.stringify(this._state))
    if (isFunction(updater)) {
      this._state = updater(prevState)
    } else if (typeof updater === 'object') {
      this._state = { ...this._state, ...updater }
    } else {
      throw `Store.update() expected ${updater} to be an object or function`
    }
    this._middlewares.forEach(middleware => {
      middleware(prevState, this._state)
    })
    this._subscribers.forEach(subscriber => subscriber())
  }

  get state() {
    return this._state
  }

  subscribe(newSubscriber) {
    this._subscribers = [...this._subscribers, newSubscriber ]
  }
}

const store = new Store(defaultState, middlewares)

export default store
