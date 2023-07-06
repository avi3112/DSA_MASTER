// Given a number N and a power P, the task is to find the exponent of this number raised to the given power, i.e. N^P.

// **Example 1 :** 

// Input: N = 5, P = 2

// Output: 25

// **Example 2 :**
// Input: N = 2, P = 5

// Output: 32


function isPower( x, y)
{
    // The only power of 1 is 1 itself
    if (x == 1)
        return (y == 1);
 
    // Repeatedly comput power of x
    let  pow = 1;
    while (pow < y)
        pow *= x;
 
    // Check if power of x becomes y
    return (pow == y);
}

const result= isPower(5,2)
console.log(result)
