console.clear();

// sample array
const mixData = [
  1,
  56,
  99,
  "grapes",
  "audi",
  45,
  true,
  "proooduct",
  "javascript",
  "great",
  "react",
  "boolean",
  false,
  33,
  100,
];
// give array elements
function getArrayElements(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// invoking getArrayElements()

getArrayElements(mixData);
