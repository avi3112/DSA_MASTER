// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = 
// Output: "holle"

function reversevol(s){
    let news= s.toLowerCase()
    let start= 0
    let end= news.length-1
    while(start<=end){
        if(news[start] === "a" || "e" || "i" || "o" || "u"){
            let temp= news[start]
            news[start]=news[end]
            news[end]= temp
            start ++
            end --
        }
    }return news
}

const res= reversevol("Hello")
console.log(res)