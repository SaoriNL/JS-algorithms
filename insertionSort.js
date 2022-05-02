function insertionSort(arr){
  for(i = 0; i < arr.length; i++){
    var second = i + 1;
    for (j = i+1; j < arr.length; j++){
      var sorted = arr[0..j];
      if(j < sorted){
        var temp = sorted;
        sorted = j;
        temp = j;
      }
    }
    if(second < arr[0]){
      var temp = second;
      second = arr[0];
      temp = arr[0];
    }
  }
  return arr;
}
