// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

//Output: number
//Input: number array
//Complexity/Constrain: linear runtime, non-empty array,
//Example/Eage Case:

// Example 1:

// Input: [2,2,1]
// Output:1

// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */

// 1. an empty obj = {}
// 2. loop through the array and put all elements in the array in the empty object, with key-pair value, key is the number, value is how many times it
// appear in the array
// 3.if object doesn`t contain this number, create new key-value ,and + 1, else +1
// 4. loop thought that object, return the key where the value is equal 1;

var array = [4, 1, 2, 1, 2];
var singleNumber = function (nums) {
  var obj = {};
  nums.map((items, index) => {
    if (obj[items] === undefined) {
      obj[items] = 0;
      obj[items]++;
    } else {
      obj[items]++;
    }
  });
  for (items in obj) {
    if (obj[items] === 1) {
      console.log(items);
      return items;
    }
  }
};

singleNumber(array);
