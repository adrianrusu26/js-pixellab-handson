var i = 0;

// while (i <= 100) {
//   console.log(i);

//   i++;
// }

//

// while (i <= 100) {
//   console.log(i);

//   i++;
// }

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).
//

// while (i < 100) {
//   console.log(i);

//   if (i >= 50) {
//     break;
//   }

//   i++;
// }

// while (i <= 67) {
//   console.log(i);

//   i++;
// }

// while (i <= 66) {
//   console.log(i);

//   i++;
// }

// while (i <= 100) {
//   if (i === 12) {
//     console.log(i);

//     break;
//   }
//   console.log(i);

//   i++;
// }

// while (i <= 32) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }

//   i++;
// }

var i = 0;
var number = prompt('Introdu un numar');
var supLimit = prompt('Introdu limita superioara pentru interval');

while (i <= supLimit) {
  i++;
  console.log(i);
  if (i % number !== 0 || i < 5) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${number}`);
}
