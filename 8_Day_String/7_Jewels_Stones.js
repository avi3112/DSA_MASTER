// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// need to apply this approch

function stonesjewels(j,s) {
    let smap= {}
    for(let i of s){
        smap[i]=(smap[i] || 0) +1
    }
    let count=0
    for(let k=0;k<j.length;k++){
        // not understand logic here
    }
    return count
};

const result= stonesjewels( "aA","aAAbbbb")
console.log(result)