// Challenge 1: Find the Longest String
// Write a function to find the longest string in the array.

const findLongestString = (array) => {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= result.length) {
      result = array[i];
    }
  }
  return result;
};

// Usage examples:
console.log("Challenge 1: 'Challenge 1: Find the Longest String'");
console.log("----------------------------");
console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "22", "333"])); // "333"

// Challenge 2: Find the Largest Number
// Write a function to find the largest number in the array.

const findLargestNumber = (arrayOfNumbers) => {
  //return Math.max(...arrayOfNumbers)
  let result = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[0] <= arrayOfNumbers[i]) {
      result = arrayOfNumbers[i];
    }
  }
  return result;
};

// Usage examples:
console.log("----------------------------");
console.log("Challenge 2: 'Find the Largest Number");
console.log("----------------------------");
console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
console.log(findLargestNumber([10, 20, 30, 40, 50])); // 50
console.log(findLargestNumber([-1, -2, -3, -4, -5])); // -1

// Challenge 3: Find Strings with Dollar Sign
// Write a function to find all strings that include a $ sign in the array.

const findDollarStrings = (stringforCheck) => {
  let result = [];
  stringforCheck.forEach((element) => {
    if (element.includes("$")) {
      result.push(element);
    }
  });
  return result;
};

// Usage examples:
console.log("----------------------------");
console.log("Challenge 3: 'Find Strings with Dollar Sign'");
console.log("----------------------------");
console.log(findDollarStrings(["I", "have", "$10"])); // ["$10"]
console.log(findDollarStrings(["$", "$$", "$$$"])); // ["$", "$$", "$$$"]
console.log(findDollarStrings(["no", "dollars", "here"])); // []

// Challenge 4: Find Numbers Greater than Ten
// Write a function to find all numbers that are larger than 10 in the array.

const findNumbersGreaterThanTen = (arr) => {
  num = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      num.push(arr[i]);
    }
  }
  return num;
};

// Usage examples:
console.log("----------------------------");
console.log("Challenge 4: Find Numbers Greater than Ten");
console.log("----------------------------");
console.log(findNumbersGreaterThanTen([5, 10, 15, 20])); // [15, 20]
console.log(findNumbersGreaterThanTen([1, 2, 3, 4, 5])); // []
console.log(findNumbersGreaterThanTen([10, 20, 30, 40, 50])); // [20, 30, 40, 50]

// Challenge 5: Sum of Numbers
// Write a function to find the sum of all numbers in the array.

const sumNumbers = (numbersrarray) => {
  result = 0;
  for (let i = 0; i < numbersrarray.length; i++) {
    result = result + numbersrarray[i];
  }
  return result;
};

// Usage examples:
console.log("----------------------------");
console.log("Challenge 5: 'Sum of Numbers'");
console.log("----------------------------");
console.log(sumNumbers([1, 2, 3, 4, 5])); // 15
console.log(sumNumbers([10, 20, 30, 40, 50])); // 150
console.log(sumNumbers([-1, -2, -3, -4, -5])); // -15

// Challenge 6: Factorial a Number
// Write a function that takes a number as an argument and returns the factorial of that number.

const factorial = (factNumber) => {
  let result = 1;
  for (let i = 2; i <= factNumber; i++) {
    result *= i;
  }
  return result;
};


// Usage examples:
console.log("----------------------------");
console.log("Challenge 6: 'Factorial a Number'");
console.log("----------------------------");
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(10)); // 3628800

// Challenge 7: Convert Numbers to Strings
// Write a function that converts all numbers to strings.

const convertNumbersToStrings = (numtostr) => {
  let result = [];
  for (let i = 0; i < numtostr.length; i++) {
    result.push(`${numtostr[i]}`);
  }
  return result;
};

// Usage examples:
console.log("----------------------------");
console.log("Challenge 7: 'Convert Numbers to Strings'");
console.log("----------------------------");
console.log(convertNumbersToStrings([1, 2, 3, 4, 5])); // ["1", "2", "3", "4", "5"]
console.log(convertNumbersToStrings([10, 20, 30, 40, 50])); // ["10", "20", "30", "40", "50"]
console.log(convertNumbersToStrings([-1, -2, -3, -4, -5])); // ["-1", "-2", "-3", "-4", "-5"]

// Challenge 8: Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz"
// instead of the number and for the multiples of five print "Buzz". For numbers which are multiples
// of both three and five print "FizzBuzz".
// No need for permutations as there are no arguments to this function. Check the printed output.
console.log("----------------------------");
console.log(
  "Challenge 8: 'Write a program that prints the numbers from 1 to 100. But for multiples of three print 'Fizz''"
);
console.log("----------------------------");

const fizzBuzz = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 != 0) {
      console.log("Fizz");
    } else if (i % 5 === 0 && i % 3 != 0) {
      console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
};
fizzBuzz();

// Challenge 9: Find the Longest Word in a String
// Write a function that returns the length of the longest word in the provided sentence.

const findLongestWord = (stringforsearch) => {
  let result = 0;
  if (!stringforsearch.includes(" ")) {
    result = stringforsearch.length;
  }
  let arraForSearch = stringforsearch.split(" ", stringforsearch.length);
  for (let i = 0; i < arraForSearch.length; i++) {
    if (arraForSearch[i].length > result) {
      result = arraForSearch[i].length;
    }
  }
  return result;
};
// Usage examples:
console.log("----------------------------");
console.log("Challenge 9: 'Find the Longest Word in a String'");
console.log("----------------------------");
console.log(findLongestWord("The quick brown fox")); // 5
console.log(findLongestWord("Hello world")); // 5
console.log(findLongestWord("")); // 0
console.log(findLongestWord("OneWord")); // 7

// Challenge 10: Palindrome Checker
// Write a function that checks whether a passed string is a palindrome or not.
// A palindrome is a word, phrase, number, or other sequences of characters that reads the same backward or forward.

const palindrome = (strForCheck) => {
  let reversed = [];
  let compare = "";
  let checkingString = strForCheck.toLowerCase()

  for (let i = checkingString.length - 1; i >= 0; i--) {
    reversed.push(checkingString[i]);
  }
  compare = reversed.join("").toString();
  if (checkingString === compare) {
    return true;
  }
  return false;
};
// Usage examples:
console.log("----------------------------");
console.log("Challenge 10: 'Palindrome Checker'");
console.log("----------------------------");
console.log(palindrome("racecar")); // true
console.log(palindrome("hello")); // false
console.log(palindrome("a")); // true
console.log(palindrome("madam")); // true
