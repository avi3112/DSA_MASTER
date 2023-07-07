// A closure is a function that has access to its outer function
// scope.


function x(){
    var a =7
    return function y(){
        console.log(a)
    }

}
    
var z = x()
z()
