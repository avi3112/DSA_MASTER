/**
 1>> What is closours in javascript?

 A closour is function that has access to its outer function scope,
 Even after the fucntion has return.
 */


 function x(){
    var a=7
    function y(){
        console.log(a)
    }
    return y
 }

 var z= x()
z()

// output >>
//7


/*
2>> What are the uses of closours?

>> module design pattern
>> currying
>> setTimeout


Note:setTimeout, DOMAPI,fetch,Localstorage,console >> it as webAPI
*/