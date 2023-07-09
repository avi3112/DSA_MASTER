/**
 1>> What is setTimeout with Closures?

 It takes a callback function attached a time,when time get expired it calls
 */

 function x(){
    var i=1
    setTimeout(()=>console.log(i),5000)
    console.log("namaste")
 }

 x()

 // output will be namaste first and after 5 sec 1.



// 2>> What is garbage collector and how its related with clousours?



function a(){
    var x=0
    var y=0
    function b(){
        console.log(x)
    }return b
}


var z=a()
console.log(z())

// note: basicallt in above code y is no longer exit bcz its not get called