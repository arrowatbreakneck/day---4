const arr = ["hello world", "this is a test"];
const anony = function(lowcas) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
  }
  return arr;
}
console.log(anony);
