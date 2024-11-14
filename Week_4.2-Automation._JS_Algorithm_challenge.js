// Challenge 1: Find the Second Largest Number
// Write a function to find the second largest number in the array.

const findSecondLargestNumber = (arrSecLargest) => {
  let max = Math.max(...arrSecLargest);
  console.log("max value is; " + max);
  let result = 0;

  if (max < 0) {
    result = Math.min(...arrSecLargest);
  }

  for (let i = 0; i < arrSecLargest.length; i++) {
    if (arrSecLargest[i] != max && arrSecLargest[i] > result) {
      result = arrSecLargest[i];
    }
  }
  return result;
};

// Usage examples:
console.log("Challenge 1: 'Find the Second Largest Numbe'r");
console.log("----------------------------");
console.log(findSecondLargestNumber([1, 2, 3, 4, 5])); // 4
console.log(findSecondLargestNumber([10, 20, 30, 40, 50])); // 40
console.log(findSecondLargestNumber([-1, -2, -3, -4, -5])); // -2

// Challenge 2: Find All Palindromes in an Array
// Write a function to find all the palindromes in an array of strings.

const findPalindromes = (arrWithPalindromes) => {
  let result = [];

  for (let i = 0; i < arrWithPalindromes.length; i++) {
    let checkedWord = arrWithPalindromes[i].split("").reverse().join("");
    if (checkedWord === arrWithPalindromes[i]) {
      result.push(arrWithPalindromes[i]);
    }
  }
  return result;
};

// Usage examples:
console.log("----------------------------");
console.log("Challenge 2: 'Find All Palindromes in an Array'");
console.log("----------------------------");
console.log(findPalindromes(["racecar", "hello", "madam", "world"])); // ["racecar", "madam"]
console.log(findPalindromes(["noon", "deed", "civic"])); // ["noon", "deed", "civic"]
console.log(findPalindromes(["apple", "banana", "cherry"])); // []

// Challenge 3: Flatten a Two-Dimensional Array
// Write a function that takes a two-dimensional array and returns a flattened array.

const flattenArray = (arrToChange) => {
  let result = [];

  for (let i = 0; i < arrToChange.length; i++) {
    arrToChange[i].forEach((element) => {
      result.push(element);
    });
  }
  return result;
};

// Usage examples:
console.log("----------------------------");
console.log("Challenge 3: 'Flatten a Two-Dimensional Array'");
console.log("----------------------------");
console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]
console.log(
  flattenArray([
    ["a", "b"],
    ["c", "d"],
  ])
); // ["a", "b", "c", "d"]
console.log(flattenArray([[1], [2], [3]])); // [1, 2, 3]

// Challenge 4: Find Common Elements Between Two Arrays
// Write a function that takes two arrays and returns an array of elements that are common to both.

const findCommonElements = (arr1, arr2) => {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr2[j]);
      }
    }
  }
  return result;
};

// Usage examples:
console.log("----------------------------");
console.log("Challenge 4: Find Common 'Elements Between Two Arrays'");
console.log("----------------------------");
console.log(findCommonElements([1, 2, 3], [3, 4, 5])); // [3]
console.log(findCommonElements(["a", "b", "c"], ["b", "c", "d"])); // ["b", "c"]
console.log(findCommonElements([10, 20, 30], [40, 50, 60])); // []

// Challenge 5: Remove Specific Elements
// Write a function that takes an array and a value, and returns a new array with all occurrences of that value removed.

const removeSpecificElement = (arrforCheck, target) => {
  let result = [];

  result = arrforCheck.filter((element) => element != target);

  return result;
};

// Usage examples:
console.log("----------------------------");
console.log("Challenge 5: 'Remove Specific Elements'");
console.log("----------------------------");
console.log(removeSpecificElement([1, 2, 3, 2, 4, 2], 2)); // [1, 3, 4]
console.log(removeSpecificElement(["a", "b", "c", "b"], "b")); // ["a", "c"]
console.log(removeSpecificElement([5, 6, 7], 8)); // [5, 6, 7]

// Challenge 6: Find the Longest Substring Without Repeating Characters
// Write a function that takes a string and returns the length of the longest substring without repeating characters.

const findLongestSubstringWithoutRepeats = (stringForCheck) => {
  let result = "";
  let currentSubstring = "";

  for (let i = 0; i < stringForCheck.length; i++) {
    if (currentSubstring.includes(stringForCheck[i])) {
      currentSubstring = currentSubstring.slice(
        currentSubstring.indexOf(stringForCheck[i]) + 1
      );
    }

    currentSubstring = currentSubstring + stringForCheck[i];

    if (result.length < currentSubstring.length) {
      result = currentSubstring;
    }
  }
  return result;
};

// Usage examples:
console.log("----------------------------");
console.log(
  "Challenge 6: 'Find the Longest Substring Without Repeating Characters'"
);
console.log("----------------------------");
console.log(findLongestSubstringWithoutRepeats("abcabcbb")); // 3 ("abc")
console.log(findLongestSubstringWithoutRepeats("bbbbb")); // 1 ("b")
console.log(findLongestSubstringWithoutRepeats("pwwkew")); // 3 ("wke")

// Challenge 7: Check If All Elements Are Unique
// Write a function that checks if all elements in an array are unique.

const areAllElementsUnique = (arrayCheck) => {
  for (let i = 0; i < arrayCheck.length; i++) {
    for (let j = i + 1; j < arrayCheck.length; j++) {
      if (arrayCheck[i] === arrayCheck[j]) {
        return false;
      }
    }
  }
  // If no duplicates are found, return true
  return true;
};

// Usage examples:
console.log("----------------------------");
console.log("Challenge 7: 'Check If All Elements Are Unique'");
console.log("----------------------------");
console.log(areAllElementsUnique([1, 2, 3, 4, 5])); // true
console.log(areAllElementsUnique(["a", "b", "c", "a"])); // false
console.log(areAllElementsUnique([10, 20, 30, 40, 50])); // true

// Challenge 8: Find the Most Frequent Element
// Write a function that finds the most frequent element in an array.

const findMostFrequentElement = (arrayOfNum) => {
  let resultSymbol = 0;
  let maxCount = 0;
  let count = 0;

  for (let i = 0; i < arrayOfNum.length; i++) {
    let count = 0;
    for (let j = 0; j < arrayOfNum.length; j++) {
      if (arrayOfNum[j] === arrayOfNum[i]) {
        count++;
      }

      if (count > maxCount) {
        maxCount = count;
        resultSymbol = arrayOfNum[i];
      }
    }
  }
  return resultSymbol;
};

// Usage examples:
console.log("----------------------------");
console.log("Challenge 8: 'Find the Most Frequent Element'");
console.log("----------------------------");
console.log(findMostFrequentElement([1, 2, 3, 2, 4, 2])); // 2
console.log(findMostFrequentElement(["a", "b", "c", "b", "b"])); // "b"
console.log(findMostFrequentElement([5, 5, 5, 6, 6, 7])); // 5

// Challenge 9: Find the Intersection of Two Arrays
// Write a function that takes two arrays and returns an array that is the intersection of the two arrays.

const findIntersection = (arra1, arra2) => {
  let result = [];

  for (let i = 0; i < arra1.length; i++) {
    for (let j = 0; j < arra2.length; j++) {
      if (arra1[i] === arra2[j]){
        result.push(arra1[i])
      }
    }
  }
    return result
  }

// Usage examples:
console.log("----------------------------");
console.log("Challenge 9: 'Find the Intersection of Two Arrays'");
console.log("----------------------------");
console.log(findIntersection([1, 2, 3], [3, 4, 5])); // [3]
console.log(findIntersection(["a", "b", "c"], ["b", "c", "d"])); // ["b", "c"]
console.log(findIntersection([10, 20, 30], [40, 50, 60])); // []

// Challenge 10: Merge Two Arrays
// Write a function that takes two arrays and merges them into one.

const mergeArrays = (firstArray, secondArray) => {
  let result = []

  for (let i = 0; i < firstArray.length; i++) {
    result.push(firstArray[i])
  }
  for (let j = 0; j < secondArray.length; j++) {
    result.push(secondArray[j])
  }
  return result
}
// OR

// const mergeArrays = (firstArray, secondArray) => {
//   return [...firstArray, ...secondArray];
// };

// Usage examples:
console.log("----------------------------");
console.log("Challenge 10: 'Merge Two Arrays'");
console.log("----------------------------");
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b", "c"], ["d", "e", "f"])); // ["a", "b", "c", "d", "e", "f"]
console.log(mergeArrays([10, 20, 30], [40, 50, 60])); // [10, 20, 30, 40, 50, 60]
