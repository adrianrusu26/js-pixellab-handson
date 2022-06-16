var defaultNumber = 2;
var defaultWarningMessage = `Nu ai introdus un numar. Folosesc ${defaultNumber}`;

var i = 0;
var number = prompt('Introdu un numar');
number = number.trim();

if (number === null || number.trim().length === 0) {
  console.warn(defaultWarningMessage);
  number = defaultNumber;
} else {
  number = Number(number);
}

if (isNaN(number) === true) {
  console.warn(defaultWarningMessage);
  number = defaultNumber;
}

var superiorlimit = prompt('Introdu limita superioara pentru interval');

// for (i = 6; i <= 100; i++) {
//   console.log(i);
//   if (i % number !== 0) {
//     continue;
//   }
//   console.log(`Acest numar este multiplu de ${number}`);
// }

for (i = 1; i <= superiorlimit; i++) {
  console.log(i);
  if (i % number !== 0) {
    continue;
  }
  console.log(`Acest numar este multiplu de ${number}`);
}
