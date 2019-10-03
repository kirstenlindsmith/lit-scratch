export const logger = (options) => (store) => (prevState, nextState) => {
  if (options.collapsed) console.groupCollapsed('state change')
  else console.group('state change')
  console.log('prev state: ', prevState)
  console.log('next state: ', nextState)
  console.groupEnd()
}

export const persist = (options) => (store) => {
  const persistedState = window.localStorage.getItem('state')
  if (persistedState) store._state = JSON.parse(persistedState)
  return (prevState, nextState) => {
    window.localStorage.setItem('state', JSON.stringify(nextState))
  }
}
