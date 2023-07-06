// 443. String Compression


// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

 

// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

// 3 solution copied from leedcode need to understand the solution and make it one.




// var compress = function(chars) {
//     let i = 0,j = 0, k = 0;
//     while(j < chars.length){
//         while(chars[i] === chars[j]){
//             j++;
//         }
//         chars[k++] = chars[i];
//         let dif = j - i;
//         if(dif  > 9){
//             let u = dif + '';let us = u.split('');let l = 0;
//             while(l < us.length){
//                 chars[k++]=us[l++];
//             }
//         } else if(j - i > 1){
//             chars[k++] = (j - i)+'';
//         }
//         i = j;
//     }
//     return k
// };

var compress = function(chars) {
    let i = 0;
    let j = 0;
    while (j < chars.length) {
        let count = 0;
        let curr = chars[j];
        while (j < chars.length && chars[j] === curr) {
            j++;
            count++;
        }
        chars[i++] = curr;
        if (count > 1) {
            for (let digit of count.toString()) {
                chars[i++] = digit;
            }
        }
    }
    return i;
};




// var compress = function (chars) {
//     let index = 0;
//     let i = 0;
//     while (i < chars.length) {
//       let j = i;
//       while (j < chars.length && chars[j] === chars[i]) {
//         j++;
//       }
//       chars[index++] = chars[i];
//       if (j - i > 1) {
//         let count = j - i;
//         for (let digit of count.toString()) {
//           chars[index++] = digit;
//         }
//       }
//       i = j;
//     }
//     return index;
//   };