// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

function backspaceCompare(s, t) {
  let str1 = check(s);
  let str2 = check(t);

  return str1 === str2;

  function check(str) {
    let arr = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] == "#") {
        arr.pop();
      } else {
        arr.push(str[i]);
      }
    }

    return arr.join("");
  }
}
const result = backspaceCompare("ab#c", "ad#c");
console.log(result);
