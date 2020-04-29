
function findMinAndRemoveSorted(array){
  let min = array[i];
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

function merge(array){

}

function mergeSort(array){

}
