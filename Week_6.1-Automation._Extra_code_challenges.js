// Challenge 1: Find the Largest Palindrome
// Write a function to find the largest palindrome made from the product of any two numbers between 0 and 1000

const getLargestPalindrome = (number) => {
  let anyPalindrome = [];
  let multySum = 0;
  let resultPalindrome = [];

  for (let i = 1; i < number; i++) {
    for (let j = 1; j < number; j++) {
      multySum = i * j;

      reversedMultysum = multySum.toString().split("").reverse().join("");

      if (multySum == reversedMultysum) {
        anyPalindrome = multySum;
      }

      if (anyPalindrome > resultPalindrome) {
        resultPalindrome = anyPalindrome;
      }
    }
  }
  return resultPalindrome;
};

// Usage examples:
console.log("Challenge 1: 'Find the Largest Palindrome'");
console.log("----------------------------");
console.log(getLargestPalindrome(1000)); // 906609

// Challenge 2: Find the most frequent element in a given array
// Write a function to find the most frequent element in the array. If there are multiple elements that appear a maximum number of times, print the first of them

const mostFrequent = (arr, n) => {
  let result = 0;
  let count = 0;
  let newCount = 0;

  for (let i = 0; i < n; i++) {
    newCount = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j]) {
        newCount++;
      }
      if (count < newCount) {
        count = newCount;
        result = arr[j];
      }
    }
  }
  return result;
};

// Usage examples:
console.log("----------------------------");
console.log("Challenge 2: 'Find the most frequent element in a given array'");
console.log("----------------------------");
let testArr = [40, 50, 30, 40, 50, 20, 30, 100, 11, 11];
let n = testArr.length;
console.log(mostFrequent(testArr, n)); // 40

// Challenge 3: Count positive and negative numbers in an array
// Write a function to count positive and negative numbers in an array

const countOfNumbers = (arrayforCheckNumbers) => {
  let positiveCount = 0;
  let negativeCount = 0;

  for (let i = 0; i < arrayforCheckNumbers.length; i++) {
    if (arrayforCheckNumbers[i] < 0) {
      negativeCount++;
    } else {
      positiveCount++;
    }
  }
  return { negativeCount, positiveCount };
};

// Usage examples:
console.log("----------------------------");
console.log("Challenge 3: 'Count positive and negative numbers in an array'");
console.log("----------------------------");
let arrDifferentNumbers = [10, 20, -1, 22, 99, 20, -9];
const { negativeCount, positiveCount } = countOfNumbers(arrDifferentNumbers);
console.log(`The negative numbers in an array is ${negativeCount}`); //"The negative numbers in an array is 2"
console.log(`The negative numbers in an array is ${positiveCount}`); // "The positive numbers in an array is 5"

// Challenge 4: Find duplicates in two arrays
// Write a function that takes two arrays as arguments and returns an array of values that are repeated more than once across the two input arrays

const findDuplicates = (array1, array2) => {
  let result = [];
  let count = 0;
  let combinedArray = array1.concat(array2);
  //console.log("Value of combined arrays: " + combinedArray);

  for (let i = 0; i < combinedArray.length; i++) {
    let count = 0;

    for (let j = 0; j < combinedArray.length; j++) {
      if (combinedArray[i] === combinedArray[j]) {
        count++;
      }
    }

    if (count > 1 && !result.includes(combinedArray[i])) {
      result.push(combinedArray[i]);
    }
  }
  return result;
};

// };

// Usage examples:
console.log("----------------------------");
console.log("Challenge 4: 'Challenge 4: Find duplicates in two arrays'");
console.log("----------------------------");
const array1 = [1, 2, 3, 4, 5, 5];
const array2 = [4, 5, 6, 7, 7, 8];

console.log(findDuplicates(array1, array2)); //  [4, 5, 7]
