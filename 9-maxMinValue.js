// WPU Codding Challenge 2024
// 9/366
// https://www.codewars.com/kata/577a98a6ae28071780000989

// versi barbar
// var min = function (list) {
//   let minValue = list[0];
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] < minValue) {
//       minValue = list[i];
//     }
//   }
//   return `min = ${minValue}`;
// };

// var max = function (list) {
//   let maxValue = list[0];
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] > maxValue) {
//       maxValue = list[i];
//     }
//   }
//   return `max = ${maxValue}`;
// };

// bisa menggunakan method sort()
// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => b - a)[0];

// menggunakan Math.min() dan Math.max()
// spread operator (...list) => [1, 2, 3] = 1, 2 ,3
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(
  min([4, 6, 2, 1, 9, 63, -134, 566]),
  max([4, 6, 2, 1, 9, 63, -134, 566])
);

// Examples
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
