// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"


function reverseword(s){
    let newstr= s.split(' ')
    for(let i=0;i<newstr.length;i++){
        let word= newstr[i].split('');
        word.reverse()
        newstr[i]= word.join("")
        
    }return newstr.join(" ")
 
}

const result= reverseword("Let's take LeetCode contest")
console.log(result)


