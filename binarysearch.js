function binary(arr, val){
  let a = 0;
  let c = arr.length - 1;
  let b = Math.floor((a + c) / 2);
  while(a < c && arr[b] !== val){
    if(val < arr[b]){
      c = b - 1;
    } else {
      c = b + 1;
    }
    b = Math.floor((a + c) / 2);
  }
  console.log(b)
  if(b === val){
    return b;
  }
  return -1;
}
console.log(binary([1, 2, 3, 4], 2))
