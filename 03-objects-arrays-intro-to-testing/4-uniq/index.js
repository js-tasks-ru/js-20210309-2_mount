/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr = []) {
  let uniqList = new Set();
  let unicArr = [];
  arr.forEach(function(item, i, arr) {
    uniqList.add(item)
  });
  for (let value of uniqList) unicArr.push(value);
  return unicArr;
}
