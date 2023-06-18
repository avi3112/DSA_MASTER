// 152. Maximum Product Subarray >> need to improve

// we can also solve this using Kadane’s Algorithm


// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.


// function maxprod(nums){
//     let max=nums[0]
//     for(let i=0;i<nums.length;i++){
//         let acc=1
//         for(let j=i;j<nums.length;j++){
//             acc=acc*nums[j]
//             if(acc>max){
//                 max=acc
//             }
//         }
//     }return max
// }

// const result= maxprod([2,3,-2,4])
// console.log(result)



// this is optimize solution

function maxprod(nums){
    let maxp=0
    let product=1
    for(let i=0;i<nums.length;i++){
        product=product*nums[i]
        if(product>maxp){
            maxp=product
        }else if(product==0){
            product=1
        }
    }
    product=1
    for(let j=nums.length-1;j>=0;j--){
        product=product*nums[j]
        if(product>maxp){
            maxp=product
        }else if(product==0){
            product=1
        }
    }
    return maxp
}

const result1= maxprod([-3,0,1,-2])
console.log(result1)



// function maxp(nums){
//     let maxprod=nums[0]
//     for(let i=0;i<nums.length;i++){
//         let prod=1
        
//         prod=prod*nums[i]
//         if(prod>maxprod){
//             maxprod=prod
//         }
//         console.log(prod)
//         if(prod<0){
//             prod=1
//         }
//     }return maxprod
// }

// const result= maxp([-3,-1,-1])
// console.log(result)