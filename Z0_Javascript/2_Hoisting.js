/*

what is hoisting?

Hoisting helps us to extract the value of variable and function even before intialising them.
this happens due to the memory creation.the 1st phase of execution context.

we can call function or access varible before it has been declared.

*/
getName()
console.log(x)
var x=7
function getName(){
    console.log("hello")
}

// output>>

// hello
// undefined