// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

 

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.


function balstr(s){
    let nstr= s.split("")
    let count= 0
    let total=0
    for(let i=0;i<nstr.length;i++){
        if(nstr[i]==='R'){
            count++
        }
        if(nstr[i]==='L'){
            count--
        }
        if(count ===0){
            total++
        }

    }return total
}

const result= balstr("LLLLRRRR")
console.log(result)