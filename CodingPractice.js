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

const arr = [
  "Dmytro",
  "Yliia",
  "Sergii",
  "Alina",
  "Dmytro",
  "Dmytro",
  "Elizabet",
];

const secondArrayforTest = ["Anatolit", "Anton", "Tolyan"]


const arraTest = (usersArray) => {
  const resultObject = {};
  usersArray.forEach((name) => {
    if (!resultObject.hasOwnProperty(name)) {
      resultObject[name] = 1;
    } else {
      resultObject[name] += 1;
    }
  });
  return resultObject;
};

console.log(arraTest(arr));
console.log(arraTest(secondArrayforTest));

// "Dmytro": 3
// "Yullia": 1
/ const num_of_digits = n => n ? ~~Math.log10(Math.abs(n)) + 1 : 1;

// console.log(num_of_digits(13124))
// console.log(num_of_digits(0))
// console.log(num_of_digits(-12381428))
// console.log(num_of_digits(12))
// console.log(num_of_digits(42))
// console.log(num_of_digits(1000))
// console.log(num_of_digits(136))
// console.log(num_of_digits(1000000000))
// console.log(num_of_digits(2147483647))
// console.log(num_of_digits(-2147483647))

//Explain
// Math.log10(...)
// Calculates the base-10 logarithm of the absolute value of n.
// For a number x, Math.log10(x) roughly equals the number of digits minus 1.
// Example:
// For 1000, Math.log10(1000) = 3.
// For 12345, Math.log10(12345) ≈ 4.09.
// ~~ The double tilde (~~) is a shorthand for Math.floor()

// Reverse Number

// function largestSwap(num) {
// 	let result = true
// 	let reversedNumber = []

// 	reversedNumber = num.toString().split('').reverse().join('')
//     console.log("Value of reversed number" + reversedNumber)
//     console.log(typeof(reversedNumber))
// 	if(reversedNumber > num){
// 		result = false
// 	}
// 	return result
// }

// console.log(largestSwap(27)) //false
// console.log(largestSwap(43)) //true
// console.log(largestSwap(14)) //false
// console.log(largestSwap(53)) //true
// console.log(largestSwap(99)) //true

// Mock practice
/* Write a function, transformArray(arr), that takes an array of integers as input and returns a new array where:

All the odd numbers are squared.
All the even numbers are halved.
The array is sorted in ascending order.
Input: An array of integers, e.g., [5, 8, 3, 12, 7].

Output: A transformed and sorted array, e.g., [1.5, 6, 9, 25, 49]. */

// function transformArray(arr) {

//     const filteredArray = arr.map((el) => {
//         if(el % 2 != 0){
//             return el * el
//         } else if (el % 2 === 0){
//             return el / 2
//         }
//     })
//     filteredArray.sort((a, b) => a - b);
//     return filteredArray
// }

// //transformArray([5, 8, 3, 12, 7])
// console.log(transformArray([5, 8, 3, 12, 7]))

//Task

// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order
// as it appeared in "s".
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in

/*function vowelsAndConsonants(s) {
    let vowel = "aeiou"
    //let vowelFromLoop = []
    //let notVowelFromLoop = []
    
    for(let i = 0; i< s.length; i++){
        if(vowel.includes(s[i])) {
            console.log(s[i])
        }
    }
    for(let i = 0; i< s.length; i++){
         if (!vowel.includes(s[i])){
            console.log(s[i])
        }
    }
}*/

// try/catch example

/*
function reverseString(s) {
    
    try{
        console.log(s.split('').reverse().join(''))
    } catch (error){
        console.log(error.message)
        console.log(s)
    }
}
*/

/*
The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.
*/

// let testAPoints = [5, 6, 7]
// let testBPoints = [3, 6, 10]

// function compareTriplets(a, b) {
//     let result = []
//     let alicePoints = 0
//     let bobPoints = 0

//     for(let i = 0 ; i < a.length; i ++){
//         if(a[i] < b[i]){
//             bobPoints += 1
//         } else if(a[i] > b[i]) {
//            alicePoints += 1
//         }
//     }
//     result.push(alicePoints)
//     result.push(bobPoints)

//     return result
// }

// console.log(compareTriplets(testAPoints, testBPoints))

//BigInt declaration example (let result = 0n)

/*
function aVeryBigSum(ar) {
    // Write your code here
    let result = 0n
    
    for(let i = 0 ; i < ar.length; i++ ){
        result += BigInt(ar[i])
    }
     return result
}
*/

/*
Count the Number of Vowels in a String
Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a string.
*/

// const countVowels = (str) => {
//     let checkVowel = "aeiou"
//     let count = 0

//     for (let i = 0; i < str.length; i++) {
//         if(checkVowel.includes(str[i])){
//             count++
//         }
//     }
//     return count
// }
// console.log(countVowels("hello world"))

/*
Filter Numbers Greater Than a Threshold
Write a function filterGreater(arr, threshold) that takes an array and a number, and returns an array with numbers greater than the threshold.
*/

// function filterGreater(arr, threshold) {
//     let result = []

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > threshold){
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// console.log(filterGreater([1, 5, 3, 9, 2], 4))

//let testSentence = "hello world!"

//return all the vowels which included in sentences

// function checkVowels(str) {
//   let testVowel = "aoeiuAOEIU";
//   let result = [];

//   for (let i = 0; i < str.length; i++) {
//     if (testVowel.includes(str[i])) {
//       result.push(str[i]);
//     }
//   }

//   return result;
// }

// console.log(checkVowels("Hi everyone I am going to be named my son Rostam Ali"));
