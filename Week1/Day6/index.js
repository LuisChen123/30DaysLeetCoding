// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var a = [1, 2, 3];

var groupAnagrams = function (strs) {
  // for (let index = 0; index < strs.length; index++) {
  // }
  // var a = strs.split('');
  // var b = a.splice(0, 1);
  // a.push(b[0]);
  // var a = [];
  // a.push(strs.split('').splice(0, 1)[0]);
  // console.log(a);
  var a = [];
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      a.push(strs[i])[j];
    }
  }
  console.log(a);
};

groupAnagrams(a);
