// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

  var turnToString = x.toString(); 
  
  var seperateBySpace = turnToString.split('');
  

  if (seperateBySpace[0] == '-'){
      let removedNegative = seperateBySpace.shift()
      let arrayWithoutNegative= seperateBySpace;
      
      let reversed = arrayWithoutNegative.reverse();
      let putBackTogether = reversed.join('');
      let addNegativeToFront = removedNegative + putBackTogether;
      
      let turnBackToNumber = parseInt(addNegativeToFront)
       
      if (turnBackToNumber < Math.pow(-2,31) ){
          return 0;
      } else {
          return turnBackToNumber
      }
      
      
  } else if (seperateBySpace[0] !== '-'){
      let reversedPositive = seperateBySpace.reverse();
      let putBackTogetherNonNeg = reversedPositive.join('');
      let turnStringBacktoNumber = parseInt(putBackTogetherNonNeg);
      
      
      if (turnStringBacktoNumber > Math.pow(2,31) || turnStringBacktoNumber < Math.pow(-2,31) ){
          return 0;
      }
      
      return turnStringBacktoNumber;
  }
 
};