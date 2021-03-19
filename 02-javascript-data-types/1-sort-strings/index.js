/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const sortedArr = arr.slice();
  let arrReverse = 1;
  if(param === 'asc'){
     arrReverse = 1; 
  }
  else{
     arrReverse = -1;
  }
  return sortedArr.sort((a, b) => arrReverse * a.localeCompare(b, ['ru','en'], {caseFirst: 'upper'}));
}
