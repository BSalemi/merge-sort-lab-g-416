
function findMinAndRemoveSorted(array){
  let min = array[0];
  let minIndex;

  for(let i = 0; i < array.length; i++){
    if(array[i] < min){
      min = array[i];
      minIndex = i
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function merge(array1, array2){
  let minFirstHalf = array1[0];
  let minSecondHalf = array2[0];

  if(minFirstHalf < minSecondHalf){
    return minFirstHalf
  } else {
    return minSecondHalf
  }

}

function mergeSort(array){

}
