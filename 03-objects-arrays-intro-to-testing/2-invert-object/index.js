/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  const mirrorObj = {}
  if(typeof obj != "undefined"){
    for(const [index, value] of Object.entries(obj)){
      mirrorObj[value] = index;
    }
    return mirrorObj;
  }
  else{
    return undefined;
  }
}
