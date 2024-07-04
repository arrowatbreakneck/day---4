(function() {
    const arr = ["jass", "arulmozhi", "gaag", "thanjai", "adhithan", "kook"];
    const palindromes = [];
    for (let i = 0; i < arr.length; i++) {
      let isPalindrome = true;
      for (let j = 0; j < arr[i].length / 2; j++) {
        if (arr[i][j] !== arr[i][arr[i].length - 1 - j]) {
          isPalindrome = false;
          break;
        }
      }
      if (isPalindrome) {
        palindromes.push(arr[i]);
      }
    }
    console.log(`Palindromes in the array: ${palindromes}`);
  })();