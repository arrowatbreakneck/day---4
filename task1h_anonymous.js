const rotate = function(rev){
    const arr = [1, 2, 3, 4, 5];
    const k = 2;
    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    if(arr=true){
    console.log(`Array rotated by ${k} times: ${arr}`);}
}
  console.log(rotate);