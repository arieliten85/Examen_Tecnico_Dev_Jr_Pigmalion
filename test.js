const nums = [1, 4, 3, 9];
const requiredSum = 7;

//01
function findSumPairLowResources(array, numero) {
  const uniqueNumbers = new Set(); // Create a set to store unique numbers
  for (let i = 0; i < array.length; i++) {
    const complemento = numero - array[i]; // Calculate the complement by subtracting the current number from the target number
    if (uniqueNumbers.has(complemento)) {
      return true;
    }
    uniqueNumbers.add(array[i]); // Add the current number to the set of unique numbers
  }
  return false;
}

//02
function findSumPairHighResources(nums, requiredSum) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === requiredSum) {
        return true;
      }
    }
  }
  return false;
}

console.log(findSumPairLowResources(nums, requiredSum));
console.log(findSumPairHighResources(nums, requiredSum));
