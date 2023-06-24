// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:

// Input: nums = [1,2,3]
// Output: 6

function maxpro(nums) {
  nums.sort();
  let n = nums.length;
  let maxlast = nums[n - 1] * nums[n - 2] * nums[n - 3];
  let maxfirst = nums[0] * nums[1] * nums[n - 1];
  if (maxlast > maxfirst) {
    return maxlast;
  } else {
    return maxfirst;
  }
}

const result = maxpro([1, 2, 3]);
console.log(result);
