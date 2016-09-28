
function linear_search(array, target){
  for(var i = 0; i < array.length; i++){
    if(array[i] == target) return i;
  }
return -1; //not found
}


