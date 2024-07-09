// WPU Codding Challenge 2024
// 7/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// cara barbar
// function countBy(x, n) {
//   let z = [];
//   for (let i = 0; i < n; i++) {
//     z.push(x * (i + 1));
//   }

//   return z;
// }

// cara elegant
function countBy(x, n) {
  // ++i == (i + 1)
  return [...Array(n)].map((_, i) => ++i * x);
}

console.log(countBy(2, 5));

// countBy(1,10), [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5), [2,4,6,8,10]
