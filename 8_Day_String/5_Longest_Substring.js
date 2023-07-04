// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// sliding window approch >> little hard


var lengthOfLongestSubstring = function(s){
    let set= new Set()
    if(s.length ===0 || s.length ===1){
        return s.length
    }
    let start=0
    let end=0
    let maxlen=0
    while(end < s.length){
        if(!set.has(s[end])){
            set.add(s[end])
            end++
            maxlen =Math.max(maxlen,set.size)
        }
        else{
            set.delete(s[start])
            start++
        }
        
    }
    return maxlen
}
const result= lengthOfLongestSubstring("pwwkew")
console.log(result)


// var lengthOfLongestSubstring = function (s) {
//     let set = new Set();
//     let left = 0;
//     let maxSize = 0;
//     if(s.length ===0 || s.length ===1){
//         return s.length
//     }

//     for (let i = 0; i < s.length; i++) {
            // if(set.has(s[i])){}
//         while (set.has(s[i])) {
//             set.delete(s[left])
//             left++;
//         }
//         set.add(s[i]);
//         maxSize = Math.max(maxSize, i - left + 1)
//     }
//     return maxSize;
// }

// const result= lengthOfLongestSubstring("")
// console.log(result)