// WPU Coding Challenge 2024
// 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

// 1. versi barbar
// function DNAtoRNA(dna) {
//   let rna = "";

//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === "T") rna += "U";
//     else rna += dna[i];
//   }

//   return rna;
// }

// 2. versi simpel
function DNAtoRNA(dna) {
  // return dna.split('T').join('U'); // using Array.prototype.join() for efficiency and conciseness.
  return dna.replace(/T/g, "U"); // using regular expression for efficiency and conciseness.
}

console.log(DNAtoRNA("GCAT"));
