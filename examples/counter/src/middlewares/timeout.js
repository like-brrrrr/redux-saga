
export const TIMEOUT = "TIMEOUT"

export default function timeout() {
    return next => action => {
      if( action[TIMEOUT] )
        return new Promise(resolve => {
          setTimeout( () => resolve(true), action[TIMEOUT] )
        })
      else
        return next(action)
    }
}
