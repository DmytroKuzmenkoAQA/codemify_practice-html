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

const array = [
  [1, 2],
  [3, 4],
  [5, 6],
  [44, 56],
  [77, 95],
];
let result = 0;

for (let i = 0; i < array.length; i++) {
  const sum = array[i][0] + array[i][1];
  if (sum > result) {
    result = sum;
  }
}
console.log(result);
