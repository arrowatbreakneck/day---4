
    const arr = ["jass", "arulmozhi", "gaag", "thanjai", "adhithan", "kook"];
    const result = function(pld1){
    const palindromes = [];
    for (let i = 0; i < arr.length; i++) {
      let itsPalindrome = true;
      for (let j = 0; j < arr[i].length / 2; j++) {
        if (arr[i][j] !== arr[i][arr[i].length - 1 - j]) {
          itsPalindrome = false;
          break;
        }
      }
      if (itsPalindrome) {
        palindromes.push(arr[i]);
      }
    }
    //console.log(`Palindromes in the array: ${palindromes}`);
    return palindromes;
}
console.log(result);
