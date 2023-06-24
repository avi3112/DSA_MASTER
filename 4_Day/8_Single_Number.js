// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1

// we can do this using hash map try plz

// let set = new Set([2, 2, 1]);
// console.log(set);

function single(nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
}

const res = single([1, 2, 1, 2, 4]);
console.log(res);
