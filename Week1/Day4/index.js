// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Note:

// 1.You must do this in-place without making a copy of the array.
// 2.Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
// output: number[]
// input: number[]
// constrane/complaclty:
// example/eage case:  input[0,12,1,0,3]   --> output[12,1,3,0,0]
// Input:
// Output:
// Explanation:

var list = [0, 1, 0, 3, 12];
//[1,0,0,3,12]

var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === 0) {
        nums.push(nums.splice(j, 1)[0]);
      }
    }
  }
  console.log(nums);
};

moveZeroes(list);
