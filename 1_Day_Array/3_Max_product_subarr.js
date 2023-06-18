// 152. Maximum Product Subarray >> need to improve



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

const result1= maxprod([-2,0,-1])
console.log(result1)