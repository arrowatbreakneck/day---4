
    const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    const primeNumbers = [];
    const firstprim = function(primeone){
   for(let i=0;i<=arr.length;i++){
    let itsprime =true;
    for(let j=2;j<arr[i];j++){
        if(arr[i] % j === 0){
            itsprime = false;
            break;
        }
    }
    if(itsprime){
    primeNumbers.push(arr[i]);
    }
   }
    
    console.log(`Prime numbers in the array: ${primeNumbers}`);
}
console.log(firstprim);