
function findMinAndRemoveSorted(array){
  return array.shift()
}

function merge(array1, array2){
  let minFirstHalf = array1[0];
  let minSecondHalf = array2[0];
  let currentMin;
  let sorted = [];

  while(array1.length != 0 && array2.length != 0){
    if(minFirstHalf < minSecondHalf){
      currentMin = findMinAndRemoveSorted(array1);
      sorted.push(currentMin)
    } else {
      currentMin = findMinAndRemoveSorted(array2);
      sorted.push(currentMin)
    }
  }
  return sorted.concat(array1).concat(array2);
}

function mergeSort(array){

}
