// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// what is anagram >> basically two tring will be there and each element should present
// in second  string


function anagram(s,t){
    if(s.length !== t.length){
        return false
    }
    let map ={}
    for(let i of s){
        map[i]=(map[i] || 0)+1        
    }
    for(let j of t){
        if(!map[j]){
            return false
        }
        map[j]-=1
    }
    return true
}

const result=anagram("anagram","nagaram")
console.log(result)
