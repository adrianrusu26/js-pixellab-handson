// var i = 1;

// do {
//   console.log(i);

//   i++;
// } while (i < 100);

// Folosind keywordul break opreste bucla
// atunci cand numarul este egal cu 50 (dar afiseaza-l).
// var i = 1;

// do {
//   console.log(i);

//   if (i === 50) {
//     i++;
//     break;
//   }

//   i++;
// } while (i < 100);

// var i = 1;

// do {
//   console.log(i);

//   if (i === 52) {
//     i++;
//     break;
//   }

//   i++;
// } while (i < 100);

// var i = 1;

// do {
//   console.log(i);

//   if (i === 51) {
//     i++;
//     break;
//   }

//   i++;
// } while (i < 100);

console.warn(`Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)
`);

// var i = 1;

// do {
//   console.log(i);

//   if (i === 12) {
//     i++;
//     break;
//   }
//   i++;
// } while (i < 100);

console.warn(`Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32.
`);
// var i = 8;

// do {
//   if (i % 2 !== 0) {
//     i++;
//     continue;
//   }
//   i++;
//   console.log(i);
// } while (i < 32);

console.warn(`Folosind metoda prompt de trei ori cere utilizatorului un numar, o limita inferioara si o limita superioara apoi afiseaza toti multiplii de numar intre limita inferioara si limita superioara introduse.
`);

var number = prompt('Numar');
var infLimit = prompt('Limita inferioara');
var supLimit = prompt('Limita superioara');
let i = 0;

do {
  if (i % number === 0 && i >= infLimit) {
    console.log(i);
  }
  i++;
} while (i <= supLimit);
