const strArray = ["hey","how"];
const titleCase = (strArray) => {
    return strArray.map((str) => {
      return str.toLowerCase().split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    });
  };
  console.log(titleCase(strArray));