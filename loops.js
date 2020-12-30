/* ********************************************* */
// Loops on Object keys

const myObj = { hip: "hop", ta: "da" };

console.log(
  "index: ",
  Object.keys(myObj).map((key, i) => {
    return i;
  })
);

console.log(
  "key: ",
  Object.keys(myObj).map((key, i) => {
    return key;
  })
);

console.log(
  "value: ",
  Object.keys(myObj).map((key, i) => {
    return myObj[key];
  })
);

/* ********************************************* */
// Loops on arrays

const myArray = [1, 2, 3];

myArray.map((key) => {
  return console.log(key); // have to have a return value
});

myArray.forEach((key) => {
  console.log(key);
});
/* ********************************************* */
