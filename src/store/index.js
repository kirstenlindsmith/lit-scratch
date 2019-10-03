import Store from './store'
import defaultState from './defaultState'
import { logger, persist } from './middlewares'

const middlewares = [logger({ collapsed: true }), persist({})]

const store = new Store(defaultState, middlewares)

export default store
