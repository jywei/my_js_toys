//test 100 times
var times = 100;
var passed = true;
var target;

while ( times-- )
{
  var arr = getTestData(); // random test data

  // test the binary search
  // find a non-exist one
  var result = binary_search(arr, 9999999);
  if ( result !== -1 )
  {
    passed = false;
    break;
  }

  // find an existing one
  result = binary_search(arr, arr[50]);
  if ( arr[result] !== arr[50])
  {
    passed = false
    break;
  }

  // find the first num larger than the target
  for ( var i = 1; i <= 1000; i++ )
  {
    target = Math.floor( Math.random() * 10000 + 100 );
    result = upper_bound1(arr, target);
    if ( arr[result] <= target || arr[result - 1] > target )
    {
      passed = false;
      break;
    }
  }

  // find the first num is larger to and equals to the target
  for ( var i = 1; i <= 1000; i++ )
  {
    target = i;
    result = upper_bound2(arr, target);
    if ( arr[result] < target || arr[result - 1] >= target)
    {
      passed = false;
      break;
    }
  }

  //find the last num smaller than the target
  for ( var i = 1; i <= 1000; i++ )
  {
    target = Math.floor( Math.random() * 10000 + 100 );
    result = lower_bound(arr, target);
    if ( arr[result] >= target || arr[result + 1] < target )
    {
      passed = false;
      break;
    }
  }

}

console.log(passed?'Accepted':'Wrong Answer');

// return the first num which is larger than the target
function upper_bound1(array, target) {

  // check existance
  // if the last num is still not larger than the target, then non-existing
  var len = array.length - 1;
  if ( array[len] <= target ) return -1;

  var L = 0, R = len;
  while ( ( R - L + 1 ) > 2 )
  {
    var M = Math.floor( ( L + R ) / 2 );
    if ( array[M] > target )
    {
      R = M;
    }
    else
    {
      L = M + 1;
    }
  }

  for ( var i = L; i <= R; i++ )
  {
    if ( array[i] > target )
    {
      return i;
    }
  }
}

// return the first larger or equals to num
function upper_bound2(array, target) {

  // same to check the existance
  var len = array.length - 1;
  if ( array[len] < target ) return -1;

  // when there are two left in the boundaries, it stops
  var L = 0, R = len;
  while ( ( R - L + 1 ) > 2 )
  {
    var M = Math.floor( ( L + R ) / 2 );
    if ( array[M] >= target )
    {
      R = M;
    }
    else
    {
      L = M + 1;
    }
  }

  for ( var i = L; i <= R; i++ )
  {
    if ( array[i] >= target )
    {
      return i;
    }
  }
}

// return the last num before limit
function lower_bound(array, target) {

  // check existance
  if ( array[0] >= target ) return -1;

  // same ending condistions
  var L = 0, R = array.length - 1;
  while ( ( R - L + 1 ) > 2 )
  {
    var M = Math.floor( ( L + R ) / 2 );
    if ( array[M] < target)
    {
      L = M;
    }
    else
    {
      R = M - 1;
    }
  }

  for (var i = R; i >= L; i-- )
  {
    if ( array[i] < target )
    {
      return i;
    }
  }


// find the first num same to the target
function linear_search(array, target)
{
  for ( var i = 0; i < array.length; i++ )
  {
    if ( array[i] == target ) return i;
  }
  return -1; //not found
}

// the original binary search
function binary_search(array, target)
{
  var L = 0, R = array.length - 1;
  while ( L <= R )
  {
    var M = Math.floor( ( L + R ) / 2 );
    if ( array[M] == target )
    {
      return M;
    }
    else if ( array[M] > target )
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

function getTestData()
{
  var len = 10000;
  var min = 1, max = 10000;
  var result = [];
  for ( var i = 0; i < len; i++ )
  {
    result.push( Math.floor( Math.random() * ( max - min ) + min ) );
  }
  return result.sort(function(a, b) { return a - b; });
}
