export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) { // Use for...of instead of for...in
    const index = array.indexOf(value);
    array[index] = appendString + value;
  }

  return array;
}
