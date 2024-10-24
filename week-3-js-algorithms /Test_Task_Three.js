/* 3 - Create a function called divideByTwo.
 It should accept 1 parameter, divide it  by 2 and return the result of the division */

 function divideByTwo(numberToDivide) {
    return numberToDivide / 2;
  }
  
console.log(divideByTwo(6)) // 3 
console.log(divideByTwo(105)) // Results in 52.5
  
// FYI. Same thing can be achieved by assigning result to const first
const result = divideByTwo(6)
console.log(result) // 3