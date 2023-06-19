// // 215. Kth Largest Element in an Array


// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// You must solve it in O(n) time complexity.

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4


// function kthlarge(nums,k){
//     let newarr= nums.sort()
//     let len= newarr.length
//     for(let i=0;i<len;i++){
//         if(i=len-k){
//             return nums[i]
//         }
//     }
// }
// const result= kthlarge([3,2,3,1,2,4,5,5,6],4)
// console.log(result)

// this code will only run on leedcode as we need to implete this priority queue

var findKthLargest = function(nums, k) {
 
 
    let maxPriorityQueue = new MaxPriorityQueue();
   
    // we need to add all elements to our mpq manually time-0(n)
    nums.forEach((num) => maxPriorityQueue.enqueue(num))
   
   
    // keep  removing(pop) element from the top
    while(k>1){
      maxPriorityQueue.dequeue()
      k--
    }
   
    // by default maxPriorityQueue.front() returns an objects {priority:5, element:5}
    // priority will give same result.
    return maxPriorityQueue.front().element
  };


const result= findKthLargest([3,2,3,1,2,4,5,5,6],4)
console.log(result)

