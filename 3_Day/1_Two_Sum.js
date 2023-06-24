// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// optimize way using two pointer>> make sure we need to sort it

function twoSum(nums, target) {
  let newnum = nums.sort();
  console.log(newnum);
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    let sum = nums[i] + nums[j];
    if (sum === target) {
      return [nums[i], nums[j]];
    } else if (sum > target) {
      j--;
    } else {
      i++;
    }
  }
}

let result = twoSum([3, 2, 4], 6);
console.log(result);
