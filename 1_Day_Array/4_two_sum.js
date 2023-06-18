// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = , target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Broute force approch

// function twosum(arr,target){
//     for(let i=0;i<arr.length;i++){
//         for(let j=1;j<arr.length;j++){
//             if(arr[i]+arr[j]===target){
//                 return [i,j]
//             }
//         }
//     }
// }

// const result= twosum([2,7,11,15],9)
// console.log(result)


// using map

function summap(nums,target){
    let map={}
    for(let i=0;i<nums.length;i++){
        let neednum= target-nums[i]
        if (map[neednum] !==undefined){
            return [map[neednum],i]
            
        }else{
            map[nums[i]]=i
        }

    }return false
}

const res= summap([2,7,11,15],9)
console.log(res)


// if (map[neednum] !==undefined){
//     return [map[neednum],i]
// }else{
//     map[nums[i]]=i
// }


// if(neednum in map){
//     return [map[neednum],i]
// }else {
//     map[nums[i]]=i
// }


// optimize way using two pointer

// function twoSum(nums,target){
//     let newnum=nums.sort()
//     console.log(newnum)
//     let i=0;
//     let j=nums.length-1;
//     while(i<j){
//         let sum=nums[i]+nums[j];
//         if(sum === target){
//             return [nums[i],nums[j]]
//         }else if(sum>target){
//             j--
//         }else{
//             i++
//         }

//     }
// }

// let result= twoSum([3,2,4],6)
// console.log(result)