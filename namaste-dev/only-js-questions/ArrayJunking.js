function chunkArray(arr, n) {
  // Your implementation
  if (arr.length == 0) {
    return arr;
  }
  let chunks = [];
  for (let i = 0; i < arr.length; i += n) {
    chunks.push(arr.slice(i, i + n));
  }
  return chunks;
}

//For the purpose of user debugging.
//pass your array and chunk size in function call
chunkArray([1, 2, 3], 5);
module.exports = chunkArray;


// ✅ Input: []
// ➡️ Output: []

// ✅ Input: [1, 2, 3], n=5
// ➡️ Output: [[1, 2, 3]]

// ✅ Input: [1, 2, 3, 4, 5], n=2
// ➡️ Output: [[1, 2], [3, 4], [5]]

// ✅ Input: [1, 2, 3, 4, 5, 6, 7], n=3
// ➡️ Output: [[1, 2, 3], [4, 5, 6], [7]]

// ✅ Input: [1, 2, 3, 4, 5, 6, 7, 8, 9], n=4
// ➡️ Output: [[1, 2, 3, 4], [5, 6, 7, 8], [9]]