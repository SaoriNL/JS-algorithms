function selectionSort(arr){
  for(var i = 0; i < arr.length; i++){
    var lowest = i;
    for(var j = i+1; j < arr.length; j++){
      if(arr[j] < arr[lowest]){
        lowest = j;
      }
    }
    if(i !== lowest){
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}


// function selectionsort(array)
//   let min = array[i]
//   while(i = 0; i > array.length; i++)
//     if (min < rest of array){
//       let temp = array[0];
//       temp = min;
//     } else if (min > some smaller array){
//       array[0] = temp;
//       temp = array[0];
//     }
//     return array;
