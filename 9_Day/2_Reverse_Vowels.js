// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = 
// Output: "holle"

// function reversevol(s){
//     let news= s.toLowerCase()
//     let start= 0
//     let end= news.length-1
//     while(start<=end){
//         if(news[start] === "a" || "e" || "i" || "o" || "u"){
//             let temp= news[start]
//             news[start]=news[end]
//             news[end]= temp
//             start ++
//             end --
//         }
//     }return news
// }

// const res= reversevol("Hello")
// console.log(res)


function rev(s){
    const vowels = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];
    let newst= s.split("")
    let left= 0
    let right=newst.length-1
    while(left<right){
        if(vowels.includes(newst[left]) && vowels.includes(newst[right])){
            let temp= newst[left]
            newst[left]=newst[right]
            newst[right]=temp
            left++
            right--
        }
        if(!vowels.includes(newst[left])){
            left++
        }
        if(!vowels.includes(newst[right])){
            right--
        }
    }return newst.join("")
}

const result= rev("leetcode")
console.log(result)