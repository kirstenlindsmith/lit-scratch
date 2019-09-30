import createStore from 'pure-store'

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

const store = createStore(defaultState)
const middlewares = [logger({ collapsed: true })]

store._update = store.update

store.update = ((args) => {
  let prevState = store.state
  store._update(args)
  middlewares.forEach(middleware => {
    middleware(prevState, store.state)
  })
}).bind(store)

export default store
