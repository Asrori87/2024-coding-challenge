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
