// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

function maxcon(nums) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    }
    if (nums[i] !== 1) {
      count = 0;
    }

    if (count > max) {
      max = count;
    }
  }
  return max;
}

const res = maxcon([1, 0, 1, 1, 0, 1]);
console.log(res);
