/*5 - Finish the function. It should accept one parameter, 'number', check if it is greater 
 than 5 and return true or false. */

function isBiggerThan5(number) {
    if(number > 5){
      return true
    }
    else{
      // Your code here
      return false;
    }
  }
  
  console.log(isBiggerThan5(6)) // true
  console.log(isBiggerThan5(5)) // false
  console.log(isBiggerThan5(4)) // false
  console.log(isBiggerThan5(1)) // false