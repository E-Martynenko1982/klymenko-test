function findSubarraysWithSum(array, targetSum) {
  const results = [];
  const seenSubsequences = new Set();

  function explore(index, currentSubsequence, currentSum) {
    if (currentSum === targetSum) {
      const subsequenceString = currentSubsequence.join(",");

      if (!seenSubsequences.has(subsequenceString)) {
        seenSubsequences.add(subsequenceString);
        results.push([...currentSubsequence]);
      }
    }

    if (index === array.length || currentSum > targetSum) {
      return;
    }

    explore(
      index + 1,
      [...currentSubsequence, array[index]],
      currentSum + array[index]
    );
    explore(index + 1, currentSubsequence, currentSum);
  }

  explore(0, [], 0);

  return results;
}

// Приклади використання:
const array = [2, 4, 6, 3, 1];
const targetSum = 7;
console.log(findSubarraysWithSum(array, targetSum));

const array2 = [1, 2, 3, 4, 5, 6, 7];
const targetSum2 = 7;
console.log(findSubarraysWithSum(array2, targetSum2));
