// WPU Codding Challenge 2024
// 8/366
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// versi barbar
// var countSheep = function (num) {
//   //your code here
//   let result = "";
//   for (let i = 1; i <= num; i++) {
//     result += i + " Sheep...";
//   }

//   return result;
// };

// versi ES6
const countSheep = (num) =>
  Array.from({ length: num }, (_, i) => `${++i} sheep...`).join("");

// tes code
// [...Array(num)].map((_,i) => `${++i} sheep...`).join("");

console.log(countSheep(4));
