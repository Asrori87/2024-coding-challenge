// WPU Codding Challenge 2024
// 11/366
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// function arrayPlusArray(arr1, arr2) {
//   let total = 0
//   for( let i = 0; i < arr1.length; i++) {
//     total += arr1[i];
//   }

//   for( let i = 0; i < arr2.length; i++) {
//     total += arr2[i];
//   }

//   return total;
// }

// function arrayPlusArray(arr1, arr2) {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     for (let j = 0; j < arguments[i].length; j++) {
//       total += arguments[i][j];
//     }
//   }

//   return total;
// }

// function arrayPlusArray(arr1, arr2) {
//   const newArray = [...arr1, ...arr2];
//   return newArray.reduce((acc, curr) => acc + curr);
// }

// const arrayPlusArray = (arr1, arr2) =>
//   [...arr1, ...arr2].reduce((acc, curr) => acc + curr);

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, curr) => acc + curr);
}

// const arrayPlusArray = (...arrays) =>
//   [].concat(...arrays).reduce((acc, curr) => acc + curr);

const output = arrayPlusArray([1, 2, 3], [4, 5, 6]);

console.log(output);
