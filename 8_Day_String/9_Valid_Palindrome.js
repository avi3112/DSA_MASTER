// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// what is palindrom >> once we reverse every world same as earlier

// approch -1

// function isPal(str){
//     let reverse= str.split("").reverse().join("")
//     return str.toLowerCase()=== reverse.toLowerCase()
// }

// const res= isPal("A man, a plan, a canal: Panama")
// console.log(res)



// approch -2

function isPalindrome(s) {
    let newstr= s.toLowerCase()
    console.log(newstr)
    if(newstr.length==0){
        return true
    }
    let left=0
    let right=newstr.length -1    
    while(left<right){
        if(newstr[left]!==newstr[right]){
            return false
        }
        left ++
        right --
    }
    return true  
};

const result= isPalindrome(" ")
console.log(result)

