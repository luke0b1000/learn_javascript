// Array.length
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length

var myArray = [1,9,3,6,2];

myArray.length = 3; //[1,9,3]

// for (var i = 0; i< myArray.length; i++){
//   console.log(myArray[i]);
// }

myArray.forEach((element) => {
  console.log(element);
});
