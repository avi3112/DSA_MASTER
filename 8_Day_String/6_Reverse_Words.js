// 151. Reverse Words in a String
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.


function reverseword(s){
    let arr= s.split('')
    let left=0
    let right = arr.length-1
    while(left<= right){
        let temp= arr[left]
        arr[left]= arr[right]
        arr[right]=temp
        left++
        right--
    }return arr.toString()
}

const result= reverseword("the sky is blue")
console.log(result)