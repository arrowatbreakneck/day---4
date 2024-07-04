const arr = [1,2,3,4,5,6]
const isPrime = (num) => {
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  };
  
  const primeNumbers = (numArray) => {
    return numArray.filter((num) => isPrime(num));
  };
  console.log(primeNumbers(arr));