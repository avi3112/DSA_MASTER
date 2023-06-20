// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// broute force

// function threesum(nums){
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             for(let k=j+1;k<nums.length;k++){
//                 if(nums[i]+nums[j]+nums[k]===0){
//                     return [nums[i],nums[j],nums[k]]
//                 }
//             }
//         }
//     }
// }

// const res= threesum([-1,0,1,2,-1,-4])
// console.log(res)


// hash map we can use




// using two pointer best approch


function threesum(nums){
    let newarr= []
    if(nums.length===0){
        return []
    }
    nums.sort()
    for(let i=0;i<nums.length-2;i++){
        let j=i+1
        let k=nums.length-1
        while(j<k){
            let sum= nums[j]+nums[k]
            if(sum === -nums[i]){
                newarr.push([nums[i],nums[j],nums[k]])
                while(nums[i] == nums[i + 1]) i ++
                while(nums[k] == nums[k - 1]) k -- 
                j++
                k--
            }
            else if(sum> -nums[i]){
                k--
            }
            else if(sum< -nums[i]){
                j++
            }
        }
    }return newarr
}
const result= threesum([-1,0,1,2,-1,-4,-2,-3,3,0,4])
console.log(result)