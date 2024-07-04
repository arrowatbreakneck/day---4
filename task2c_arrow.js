arr = [2,3,4,5,6];
const sum = (numArray) => {
    return numArray.reduce((a, b) => a + b, 0);
  };
  console.log(sum(arr));