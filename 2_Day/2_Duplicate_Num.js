// 287. Find the Duplicate Number

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3

// sorting

function dp(nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return nums[i];
    }
  }
  return -1;
}
const res1 = dp([1, 3, 4, 2, 2]);
//console.log(res1);

// hashmap

// function dup(arr) {
//   let map = {};
//   for (let i of arr) {
//     if (!map[i]) {
//       map[i] = 1;
//     } else return i;
//   }
// }

function dup(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else return nums[i];
  }
}

const result = dup([3, 1, 3, 4, 2]);

console.log(result);

// we can use Floyd's Algorithm
