(function() {
    const arr = [1, 2, 3, 4, 5];
    const k = 2;
    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    console.log(`Array rotated by ${k} times: ${arr}`);
  })();