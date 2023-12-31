// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.


// function mergesort(nums1,nums2){
//     let newarr=[]
//     for(let i=0;i<nums1.length;i++){
//         for(let j=0;j<nums2.length;j++){
//             if(nums1[i]>nums2[j]){
//                 newarr.push(nums2[j])
//                 j++
//             }
//             if(nums1[i]<nums2[j]){
//                 newarr.push(nums1[i])
//                 i++
//             }

//         }
//     }return newarr.sort()
// }
// const result= mergesort([1,2,3,0,0,0],[2,5,6])
// console.log(result)



function merge(nums1,m,nums2,n){
    let nums1copy=[]
    for(let i=0;i<m;i++){
        nums1copy[i]=nums1[i]
    }
    let p1=0
    let p2=0

    for(let j=0;j<m+n;j++){
        if(p2>=n || (p1<m && nums1copy[p1]<nums2[p2])){
            nums1[j]=nums1copy[p1]
            p1++
        }else{
            nums1[j]=nums2[p2]
            p2++
        }
    }

}

const result= merge([1,2,3,0,0,0],3,[2,5,6],3)
console.log(result)



// this aproch when there is no 0 in array

function mergesor(arr1,arr2){
    let result=[]
    while(arr1.length && arr1.length){
        let next= (arr1[0]<arr2[0]?arr1.shift():arr2.shift())
        result.push(next)
    }
    if(arr1.length){
        result= result.concat(arr1)
    }
    else if(arr2.length){
        result= result.concat(arr2)
    }
    return result

}

const res=mergesor([1,2,3,0,0,0],[2,5,6])
console.log(res)