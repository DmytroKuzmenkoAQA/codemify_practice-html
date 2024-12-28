// // 2620. Counter

// const counter = (n, arr) => {
//     let result = [];
//     let counter = n
//     for ( let i = 0; i < arr.length; i++) {
//         result.push(n)
//         n++
//     }
//     return result
// }

// console.log(counter(10, ["call","call","call"]));

// const array = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
//   [44, 56],
//   [77, 95],
// ];
// let result = 0;

// for (let i = 0; i < array.length; i++) {
//   const sum = array[i][0] + array[i][1];
//   if (sum > result) {
//     result = sum;
//   }
// }
// console.log(result);

//

// Challenge 2: Find All Palindromes in an Array
// Write a function to find all the palindromes in an array of strings.

// function findPalindromes(array) {
//   let result = [];

//   array.forEach((element) => {

//     if(element === element.split('').reverse().join('')){
//       result.push(element)
//     }
//   });
//   return result
// }

// // Usage examples:
// console.log(findPalindromes(['racecar', 'hello', 'madam', 'world'])); // [“racecar”, “madam”]
// console.log(findPalindromes(['noon', 'deed', 'civic'])); // [“noon”, “deed”, “civic”]
// console.log(findPalindromes(['apple', 'banana', 'cherry'])); // []


// Challenge 3: Flatten a Two-Dimensional Array
// Write a function that takes a two-dimensional array and returns a flattened array.

// function flattenArray(array) {

//   let result = []

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       result.push(array[i][j])
//     }

//   }
//   return result

// }

// // Usage examples:
// console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]
// console.log(flattenArray([['a', 'b'], ['c', 'd']])); // [“a”, “b”, “c”, “d”]
// console.log(flattenArray([[1], [2], [3]])); // [1, 2, 3


// Challenge 4: Find Common Elements Between Two Arrays
// Write a function that takes two arrays and returns an array of elements that are common to both.

// function findCommonElements(array1, array2) {
//   let result = [];

//   for (let i = 0; i < array1.length; i++) {
   
//     if(array2.includes(array1[i])) {
//       result.push(array1[i])
//     }
//   }
//   return result
// }

// // Usage examples:
// console.log(findCommonElements([1, 2, 3], [3, 4, 5])); // [3]
// console.log(findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd'])); // [“b”, “c”]
// console.log(findCommonElements([10, 20, 30], [40, 50, 60])); // []

// Challenge 5: Remove Specific Elements
// Write a function that takes an array and a value, and returns a new array with all occurrences of that value removed.

// function removeSpecificElement(array, number) {
//   let result = []

//   array.forEach(element => {
//     if(element != number) {
//       result.push(element)
//     }
//   });
//   return result
// }

// // Usage examples:
// console.log(removeSpecificElement([1, 2, 3, 2, 4, 2], 2)); // [1, 3, 4]
// console.log(removeSpecificElement(['a', 'b', 'c', 'b'], 'b')); // [“a”, “c”]
// console.log(removeSpecificElement([5, 6, 7], 8)); // [5, 6, 7]

// Challenge 6: Find the Longest Substring Without Repeating Characters
// Write a function that takes a string and returns the length of the longest substring without repeating characters.

// function findLongestSubstringWithoutRepeats(str){
//   let result = 0
//   let tmp = []

//   let arraySymbols = str.split('')
//   for (let i = 0; i < arraySymbols.length; i++) {
//     if(!tmp.includes(arraySymbols[i])){
//       tmp.push(arraySymbols[i])
//     }
    
//   }
//   console.log(tmp)
//   result = tmp.length
//   return result
// }

// // Usage examples:
// console.log(findLongestSubstringWithoutRepeats('abcbcabb')); // 3 (“abc”)
// console.log(findLongestSubstringWithoutRepeats('bbbbb')); // 1 (“b”)
// console.log(findLongestSubstringWithoutRepeats('pwwkew')); // 3 (“wke”)

