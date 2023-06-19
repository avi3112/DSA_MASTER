// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// var missingNumber = function(nums) {
//     let n = nums.length
//     let sum= (n*(n+1))/2

//     for(let e of nums){
//         sum-=e
//     }
//     return sum
    
// };


// const test= missingNumber([3,0,1,4,5,2,7])
// console.log(test)


function misnum(nums){
    let n=nums.length
    let sum=(n*(n+1))/2
    for(let i=0;i<nums.length;i++){
        sum=sum-nums[i]
    }return sum
}

const result=misnum([3,0,1,4,5,2,7])
console.log(result)
