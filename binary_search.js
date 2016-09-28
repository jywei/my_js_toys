
function binary_search(array, target) {
  var L = 0, R = array.length - 1;
  while(L <= R) {
    var M = Math.floor( ( L + R ) / 2 ) ;
    if (array[M] == target)
    {
      return M;
    }
    else if (array[M] > target)
    {
      R = M - 1;
    }
    else
    {
      L = M + 1;
    }
  }
  return -1;
}
