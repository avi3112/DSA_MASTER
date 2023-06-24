// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// must need to apply on sorted array
// binary search  also called as  divide and concore techniqu

function binarysearch(array, num) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (array[mid] < num) {
      min = mid + 1;
    } else if (array[mid] > num) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

const result1 = binarysearch([-1, 0, 3, 5, 9, 12], 9);
console.log(result1);
