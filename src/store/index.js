import Store from './store'
import defaultState from './defaultState'
import { logger } from './middlewares'

const middlewares = [logger({ collapsed: true })]

const store = new Store(defaultState, middlewares)

export default store
