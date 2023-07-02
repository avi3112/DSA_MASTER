// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.



function lastworld(s){
    if(s.length===0) return 0
    let arr= s.trim().split(' ')
    return arr[arr.length-1].length
    
}

const result= lastworld("Hello World")
console.log(result)

