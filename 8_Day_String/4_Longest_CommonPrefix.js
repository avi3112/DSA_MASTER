// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// we can solve this using trie

function longestCommonPrefix(strs) {
  if (strs == null || strs.length == 0) return " ";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return strs[0].slice(0, i);
      }
    }
  }
  strs[0];
}

const result = longestCommonPrefix(["flower","flow","flight"]);
console.log(result);
