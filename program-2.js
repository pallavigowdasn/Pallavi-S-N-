function generateOddSeries(x) {
  const result = [];
  for (let i = 0; i < x; i++) {
    result.push(2 * i + 1);
  }
  return result.join(", ");
}

// Example usage:
console.log(generateOddSeries(1)); // Output: 1
console.log(generateOddSeries(2)); // Output: 1, 3
console.log(generateOddSeries(3)); // Output: 1, 3, 5
console.log(generateOddSeries(4)); // Output: 1, 3, 5, 7
console.log(generateOddSeries(10)); // Output: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
