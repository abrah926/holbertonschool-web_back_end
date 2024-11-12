export default function appendToEachArrayValue(array, appendString) {
  const result = [];

  for (const value of array) {
    result.push(value + appendString);
  }

  return result;
}
