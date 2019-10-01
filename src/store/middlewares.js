export const logger = (options) => (prevState, nextState) => {
  if (options.collapsed) console.groupCollapsed('state change')
  else console.group('state change')
  console.log('prev state: ', prevState)
  console.log('next state: ', nextState)
  console.groupEnd()
}
