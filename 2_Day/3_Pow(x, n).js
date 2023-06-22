// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000

//brute force

// function power(x, n) {
//   let ans;
//   for (let i = 1; i < n - 1; i++) {
//     ans = x * i;
//   }
//   return ans;
// }

// const result1 = power(2, 10);
// console.log(result1);

function power(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 1 / power(x, -n);
  }
  return x * power(x, n - 1);
}

const res = power(3, -2);
console.log(res);
