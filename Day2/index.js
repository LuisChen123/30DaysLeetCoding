// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

// Input: 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

/**
 * @param {number} n
 * @return {boolean}
 */

//  input = 14
//  1 16 = 17
//  1 49 =50
//  25 0 = 25
//  4 25 = 29
// 4 81 = 85
// 64 25 = 89
// 64 81 = 125
// 1 4 25 = 30
// 9 = 9
//

var number = 1234;

var isHappy = function (n) {
  if (n === 1) {
    console.log('ture');
    return true;
  } else if (n.toString().split('').length === 1) {
    // console.log(n.toString().split('').length);
    // console.log(n + 'false');
    console.log(n + 'false');
    return false;
  } else {
    let result;
    var emp = n.toString().split('');
    var numList = [];
    for (let i = 0; i < emp.length; i++) {
      numList.push(Number(emp[i]));
    }
    const getSum = function (total, current) {
      return total + Math.pow(current, 2);
    };
    result = numList.reduce(getSum, 0);
    isHappy(result);
  }
};

isHappy(number);
