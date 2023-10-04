Copy code
function threeSum(arr, target) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);
  
  // Initialize variables
  let closestSum = arr[0] + arr[1] + arr[2]; // Initialize with the sum of the first three elements
  let minDiff = Math.abs(target - closestSum);
  
  // Iterate through the array
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    
    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];
      const currentDiff = Math.abs(target - currentSum);
      
      if (currentDiff < minDiff) {
        minDiff = currentDiff;
        closestSum = currentSum;
      }
      
      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  
  return closestSum;
}

module.exports = threeSum;