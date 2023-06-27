// 1213. Intersection of Three Sorted Arrays

// Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order,
//  return a sorted array of only the integers that appeared in all three arrays.

// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
// Output: [1,5]
// Explanation: Only 1 and 5 appeared in the three arrays.

// function intersection(nums1, nums2, nums3) {
//   let res = [];
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       for (let k = 0; k < nums3.length; k++) {
//         if (nums1[i] == nums2[j] &&nums2[j]  == nums3[k]) {
//           res.push(nums1[i]);
//         }
//       }
//     }
//   }
//   return res;
// }

// const result = intersection([1, 2, 3, 4, 5], [1, 2, 5, 7, 9], [1, 3, 4, 5, 8]);
// console.log(result);
// Intersection of Three Sorted Arrays

// function intersection(nums1,nums2,nums3){
//     let set= new Set()
//     let i=0;
//     let j=0;
//     let k=0;
    
    
//     while(i<nums1.length && j<nums2.length && k<nums3.length){
//         if(nums1[i]=== nums2[j] && nums2[j] ===nums3[k]){
//             set.add(nums1[i])
//             i++,
//             j++,
//             k++
//         }
//         else if(nums2[j]<nums3[k]){
//             j++
//         }else if (nums1[i]<nums3[k]){
//             i++
//         }else{
//             k++
//         }
//     }return set
// }


// const res= intersection([3,3,3,3],[3,3,3,3],[3,3,3,3])
// console.log(res)


// Intersection of Sorted Arrays

// 349. Intersection of Two Arrays

function intersection2(nums1,nums2){
    let set= new Set()
    nums1.sort()
    nums2.sort()
    let i=0
    let j=0
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]===nums2[j]){
            set.add(nums1[i])
            i++
            j++
        }else if(nums1[i]<nums2[j]){
            i++
        }else {
            j++
        }
    }return set
}

const result2= intersection2([4,9,5],[9,4,9,8,4])
console.log(result2)

