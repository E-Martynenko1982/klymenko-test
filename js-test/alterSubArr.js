function findSubarraysWithSum(array, targetSum) {
  const result = [];
  const n = array.length;
  const totalComb = 1 << n; // 2^n комбінацій

  for (let mask = 1; mask < totalComb; mask++) {
    let subarray = [];
    let sum = 0;

    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        subarray.push(array[i]);
        sum += array[i];
      }
    }

    if (sum === targetSum) {
      result.push(subarray);
    }
  }

  return result;
}

const array = [2, 4, 6, 3, 1];
const targetSum = 7;
console.log("\nResulting subarrays:", findSubarraysWithSum(array, targetSum));
