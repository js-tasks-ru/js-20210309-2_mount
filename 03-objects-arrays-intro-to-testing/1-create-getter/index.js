/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path = "") {
  const destrPath = path.split('.');
  return function(targetObject){
    if(targetObject){
      for(const [index, value] of Object.entries(destrPath)){
        if(typeof targetObject != "undefined"){
          targetObject = targetObject[value];
        }
      }
      return targetObject;
    }
  }
}

