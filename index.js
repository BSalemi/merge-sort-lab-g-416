
function findMinAndRemoveSorted(array){
  return array.shift()
}

function merge(array1, array2){
  let minFirstHalf = array1[0];
  let minSecondHalf = array2[0];
  let sorted = [];

  while(array1.length != 0 && array2.length != 0){
    if(minFirstHalf < minSecondHalf){
      sorted.push(findMinAndRemoveSorted(array1))
    } else {
      sorted.push(findMinAndRemoveSorted(array2))
    }
  }
  return sorted.concat(array1).concat(array2);
}

function mergeSort(array){

}
