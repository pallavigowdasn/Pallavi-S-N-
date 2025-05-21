function generateOddSeriesModified(a) {
  const result = [];
  const terms = a % 2 === 0 ? a - 1 : a;

  for (let i = 0; i < terms; i++) {
    result.push(2 * i + 1);
  }

  return result.join(", ");
}


console.log(generateOddSeriesModified(1)); // Output: 1
console.log(generateOddSeriesModified(2)); // Output: 1
console.log(generateOddSeriesModified(3)); // Output: 1, 3, 5
console.log(generateOddSeriesModified(4)); // Output: 1, 3, 5
console.log(generateOddSeriesModified(5)); // Output: 1, 3, 5, 7, 9
console.log(generateOddSeriesModified(6)); // Output: 1, 3, 5, 7, 9
