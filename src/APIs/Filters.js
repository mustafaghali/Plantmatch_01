import {apiConfigs} from './webAPIConfig' 

export function timeoutFilter( promise,ms = apiConfigs.defaultTimout) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        reject(new Error("timeout"))
      }, ms)
      promise.then(resolve, reject)
    })
  }
