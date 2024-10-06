export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const updatedValue = appendString + value;
    array[array.indexOf(value)] = updatedValue;
  }

  return array;
}
