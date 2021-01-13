/* ********************************************* */
// Loops on Object keys

const myObj = { hip: "hop", ta: "da" };

// Preferred way of looping into objects!
// Note: Advantage of .entries() compared to .keys():
// To output the values I don't need to do `myObj[key]` anymore (pb: if the name of your object changes, I also need to change the loop).
console.log(
  "index: ",
  Object.entries(myObj).map(([key, value]) => {
    return value; // or key for keys
  })
);

// JSX way
Object.entries(myObj).map(([key, value]) => (
  <p key={key}>
    {key}: {value}
  </p>
));

/////////////////////////
//////// Legacy: ////////
/////////////////////////
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
