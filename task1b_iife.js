(function() {
    const arr = ["hello world", "this is a test", ];
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
    }
    console.log(`Array with title caps strings: ${arr}`);
  })();