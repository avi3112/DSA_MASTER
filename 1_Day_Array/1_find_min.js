// testing on github

{
  /* <aside>
💡 Given an array of size N. The task is to find the maximum and the
minimum element of the array using the minimum number of comparisons.
Examples:
Input: arr[] = {3, 5, 4, 1, 9}
Output: Minimum element is: 1
Maximum element is: 9

TC : O(n)
SC: O(n)

</aside> */
}

// function findmin(arr){
//     let newarr= arr.sort()
//     let res= newarr[newarr.length-1]
//     return [newarr[0],res]
// }

// const result = findmin([3, 5, 4, 1, 9])
// console.log(result)

// function minmax(arr){
//     let min=0
//     let max=0
//     for(let i=0;arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }else if(arr[i]<=min){
//             min=arr[i]
//         }
//     }return [min,max]
// }

// const result= minmax([3, 5, 4, 1, 9])
// console.log(result)

function minmax(arr) {
  if (arr.length <= 0) {
    return "array is empty";
  }
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [min, max];
}
const test = minmax([-3, 5, 4, 1, 2]);
console.log(test);
