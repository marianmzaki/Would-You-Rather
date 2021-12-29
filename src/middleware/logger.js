// This is a logger in the middleware
// group by acction type.
const logger = (store) => (next) => (action) => {
    console.group(action.type)
      console.log('The action: ', action)
      const returnValue = next(action)
      console.log('The new state: ', store.getState())
    console.groupEnd()
    return returnValue
  }
  
  export default logger