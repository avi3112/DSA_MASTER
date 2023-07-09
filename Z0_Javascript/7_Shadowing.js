/**
 What is shadowing in javascript?

 */

 var a=100
 {
    var a=10
    let b=20
    const c=30
    console.log(a)
    console.log(b)
    console.log(c)
 }
 console.log(a)

 // the value of a which is in global got changed to 10 bcz its refers to same object
 // this happens in case of var only.