// You are given an integer array nums and an integer k.

// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

// Example 1:

// Input: nums = [1], k = 0
// Output: 0
// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

// Example 2:

// nums = [0,10], k = 2 >> bcz 2nd max is 8 and 2nd min is 2 and diff will be 6
// output >> 6
// need to check once

function smallest(nums, k) {
  let max = nums[0];
  let min = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
    if (nums[i] < min) {
      min = nums[i];
    }
    console.log(max, min);
    max -= k;
    min += k;
    console.log(max, min);
  }
  return max - min;
}

const res = smallest([0, 10], 2);
console.log(res);
