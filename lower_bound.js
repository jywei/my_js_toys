// the last number before the boundary
function lower_bound(array, target) {

  // check the answer existance
  // if the first number is lower than the target, there is no answer
  if ( array[0] >= target ) return -1;

  // when the boundaries have lower than two numbers
  var L = 0, R = array.length - 1;
  while ( (R - L + 1 ) > 2 ) {
    var M = Math.floor( ( L + R ) / 2 );
    if ( array[M] < target )
    {
      L = M;
    }
    else
    {
      R = M - 1;
    }
  }

  // user linear search in the answer range
  // it's not necessary to use a loop, since the answer is around two
  for (var i = R; i >= L; i--)
  {
    if ( array[i] < target )
    {
      return i;
    }
  }
}
