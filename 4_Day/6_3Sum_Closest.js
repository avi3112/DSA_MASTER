// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

function sumclose(nums, target) {
  nums.sort();
  let ans = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end];
      if (sum > target) {
        end--;
      } else {
        start++;
      }
      if (target - sum < target - ans) {
        ans = sum;
      }
    }
  }
  return ans;
}

const res = sumclose([0, 0, 0], 1);
console.log(res);
