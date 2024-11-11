// Challenge 1: Square All Numbers
// Write a function that takes an array of numbers and returns a new array with each number squared.

function squareNumbers(num) {
  const result = num.map((element) => element * element);
  return result;
}

// Usage examples:
console.log("Challenge 1: 'Square All Numbers'");
console.log("----------------------------");
console.log(squareNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
console.log(squareNumbers([10, 20, 30, 40, 50])); // [100, 400, 900, 1600, 2500]

// Challenge 2: Concatenate Array Elements
// Write a function that takes an array of strings and concatenates all the elements into one string.

function concatenateElements(arrOfStrings) {
  let result = "";
  for (let i = 0; i < arrOfStrings.length; i++) {
    result = result.concat("", arrOfStrings[i]);
  }
  return result;
}

// Usage examples:
console.log("----------------------------");
console.log("Challenge 2: 'Concatenate Array Elements'");
console.log("----------------------------");
console.log(concatenateElements(["Hello", "world"])); // "Helloworld"
console.log(concatenateElements(["I", "love", "JavaScript"])); // "IloveJavaScript"

// Challenge 3: Reverse Array
// Write a function that takes an array and returns a new array with the elements in reverse order.

function reverseArray(arrayForReverse) {
  let result = [];
  for (let i = arrayForReverse.length - 1; i >= 0; i--) {
    result.push(arrayForReverse[i]);
  }
  return result;
}

// Usage examples:
console.log("----------------------------");
console.log("Challenge 3: 'Reverse Array'");
console.log("----------------------------");
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c", "d"])); // ["d", "c", "b", "a"]

// Challenge 4: Check If Array Contains Element
// Write a function that takes an array and an element, and checks if the array contains that element.

function containsElement(arrForCheck, target) {
  let result = false;

  for (let i = 0; i < arrForCheck.length; i++) {
    if (arrForCheck[i] === target) {
      result = true;
    }
  }
  return result;
}

// Usage examples:
console.log("----------------------------");
console.log("Challenge 4: 'Check If Array Contains Element'");
console.log("----------------------------");
console.log(containsElement([1, 2, 3, 4, 5], 3)); // true
console.log(containsElement(["a", "b", "c", "d"], "e")); // false

// Challenge 5: Remove Duplicate Elements
// Write a function that takes an array and returns a new array with duplicate elements removed.

function removeDuplicates(arrCheckDublicates) {
  let result = [];

  for (let i = 0; i < arrCheckDublicates.length; i++) {
    if (!result.includes(arrCheckDublicates[i])) {
      result.push(arrCheckDublicates[i])
    }
  }
  return result
}

// Usage examples:
console.log("----------------------------");
console.log("Challenge 5: 'Remove Duplicate Elements'");
console.log("----------------------------");
console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
console.log(removeDuplicates(["a", "a", "b", "b", "c"])); // ["a", "b", "c"]

// Challenge 6: Calculate Average
// Write a function that takes an array of numbers and returns the average.

const calculateAverage = (arrFindAverage) => {
  let result = 0;

  for (let i = 0; i < arrFindAverage.length; i++) {
    result += arrFindAverage[i]
  }
  return result / arrFindAverage.length
}

// Usage examples:
console.log("----------------------------");
console.log("Challenge 6: 'Calculate Average'");
console.log("----------------------------");
console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
console.log(calculateAverage([10, 20, 30, 40, 50])); // 30

// Challenge 7: Find Odd Numbers
// Write a function that takes an array of numbers and returns a new array with only the odd numbers.

const findOddNumbers = (arraForOdd) => {
  let result = []

  for (let i = 0; i < arraForOdd.length; i++) {
    if (arraForOdd[i] % 2 != 0) {
      result.push(arraForOdd[i])
    }
  }
  return result
}

// Usage examples:
console.log("----------------------------");
console.log("Challenge 7: 'Find Odd Numbers'");
console.log("----------------------------");
console.log(findOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]
console.log(findOddNumbers([2, 4, 6, 8, 10])); // []

// Challenge 8: Find Even Numbers
// Write a function that takes an array of numbers and returns a new array with only the even numbers.

const findEvenNumbers = (arraForEven) => {
  let result = []

  for (let i = 0; i < arraForEven.length; i++) {
    if (arraForEven[i] % 2 === 0) {
      result.push(arraForEven[i])
    }
  }
  return result
}

// Usage examples:
console.log("----------------------------");
console.log("Challenge 8: 'Find Even Numbers'");
console.log("----------------------------");
console.log(findEvenNumbers([1, 2, 3, 4, 5])); // [2, 4]
console.log(findEvenNumbers([2, 4, 6, 8, 10])); // [2, 4, 6, 8, 10]
