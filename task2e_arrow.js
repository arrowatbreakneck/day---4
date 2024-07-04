const arr= [121, 123, 131, 1441, 1551, 1661]
const isPalindrome = (num) => {
    const str = String(num);
    return str === str.split('').reverse().join('');
  };
  
  const palindromeNumbers = (numArray) => {
    return numArray.filter((num) => isPalindrome(num));
  };
  console.log(palindromeNumbers(arr));