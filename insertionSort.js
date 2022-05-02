function insertionSort(arr){
  for(var i = 1; i < arr.length; i++){
    var currentVal = arr[i];
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
      arr[j+1] = arr[j]
    }
    arr[j+1] = currentVal;
    console.log(arr)
  }
  return arr;
}

console.log(insertionSort[2,1,9,76,4])

// function insertionSort(arr){
//   for(i = 0; i < arr.length; i++){
//     var second = i + 1;
//     for (j = i+1; j < arr.length; j++){
//       var sorted = arr[0..j];
//       if(j < sorted){
//         var temp = sorted;
//         sorted = j;
//         temp = j;
//       }
//     }
//     if(second < arr[0]){
//       var temp = second;
//       second = arr[0];
//       temp = arr[0];
//     }
//   }
//   return arr;
// }
