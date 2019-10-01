// for checking if updater is a function in the update() method of our store class
function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

// simple store class
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

export default Store
