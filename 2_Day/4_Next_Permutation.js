// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]
// Example 2:

// Input: nums = [3,2,1]
// Output: [1,2,3]
// Example 3:

// Input: nums = [1,1,5]
// Output: [1,5,1]
// need to work on this

function permutation(nums) {
  if (nums.length === 1) {
    return;
  }
  let first;
  let second;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      first = i;
      break;
    }
  }
  if (first < 0) {
    return nums.reverse();
  } else {
    for (let j = nums.length - 1; j > 0; j--) {
      if (nums[j] > nums[first]) {
        second = j;
        break;
      }
    }
  }
  let temp = nums[first];
  nums[first] = nums[second];
  nums[second] = temp;

  return nums.sort();
}

const test = permutation([3, 2, 1]);
console.log(test);
