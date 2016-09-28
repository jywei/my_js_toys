
function search(array, target) {
  var L = 0, R = array.length - 1;
  while(L <= R) {
    var M = Math.floor( ( L + R ) / 2 );
    if (array[M] < target)
    {
      L = M;
    }
    else
    {
      R = M - 1;
    }
  }
  return M;
}
