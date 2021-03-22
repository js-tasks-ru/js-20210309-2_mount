/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  let [...destrPath] = path.split('.');
  return function(targetObject){
    if(targetObject){
      for(var i = 0; i < destrPath.length; i++) {
        if(typeof targetObject != "undefined"){
          targetObject = targetObject[destrPath[i]];
        }
      }
      return targetObject
    }
  }
}

