
    const arr1 = [1, 3, 5, 7, 9];
    const arr2 = [2, 4, 6, 8, 10];
    const mergedArr = [...arr1, ...arr2];
    const sizedarr = function(arrsize){
    mergedArr.sort((a, b) => a - b);
    const mid = Math.floor(mergedArr.length / 2);
    const median = mergedArr.length % 2 === 0 ? (mergedArr[mid - 1] + mergedArr[mid]) / 2 : mergedArr[mid];
    return median
    }
  console.log(sizedarr);