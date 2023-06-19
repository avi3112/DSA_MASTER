// Given an integer array nums and an integer k, return the kth smallest
// element in the array. Note that it is the kth smallest element in the sorted
// order, not the kth distinct element.
// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2


function kthsmall(nums,k){
    let newarr= nums.sort()
    let len= newarr.length
    for(let i=0;i<len;i++){
        if(i=k-1){
            return nums[i]
        }
    }
}
const result= kthsmall([3,2,1,5,6,4],2)
console.log(result)


var findKthmin = function(nums, k) {
    let minPriorityQueue = new MinPriorityQueue();
 
 
  // We need to add all elements to our min priority queue manually - O(n)
  nums.forEach((num) => minPriorityQueue.enqueue(num));
 
 
  // Keep removing (dequeue) elements from the top
  while (k > 1) {
    minPriorityQueue.dequeue();
    k--;
  }
 
 
  // By default, minPriorityQueue.front() returns an object {priority: 5, element: 5}
  // We return the element property to get the kth smallest element
  return minPriorityQueue.front().element;
};



