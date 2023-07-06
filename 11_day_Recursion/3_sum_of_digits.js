// Given a number, we need to find sum of its digits using recursion.

// Examples:
// Input : 12345
// Output : 15

// Input : 45632
// Output :20

function sum_of_digit(n) {
  if (n == 0) return 0;
  return (n % 10) + sum_of_digit(parseInt(n / 10));
}


const result= sum_of_digit(45632)
console.log(result)