// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function (nums) {
  let end = nums.length;
  for (let i = end; i >= 0; i--) {
    // We loop from the end of array
    if (nums[i] === 0) {
      // if current element is 0
      nums.splice(i, 1); // we remove if from array
      nums.push(0); // and push to the end
    }
  }
  return nums;
};

const res = moveZeroes([0, 1, 0, 3, 12]);
console.log(res);
