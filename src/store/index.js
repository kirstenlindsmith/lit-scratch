import { logger } from './middlewares'
import defaultState from './defaultState'
import Store from './store'

const middlewares = [logger({ collapsed: true })]

const store = new Store(defaultState, middlewares)

export default store
