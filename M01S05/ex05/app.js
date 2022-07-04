const person = {
  getName: function () {
    return 'Adrian Rusu';
  },

  getAge: () => {
    return 28;
  },
};

console.warn(`Afiseaza primul nume al persoanei folosind metoda getName()
Afiseaza anul de nastere al persoanei folosind metoda getAge() si anul curent.
Afiseaza ultimele doua cifre al anului de nastere al persoanei, folosind anul curent si metoda getAge(). (Exemplu: ‘87).
`);

const personAge = person.getAge();
const personName = person.getName();
const personFirstName = personName.split(' ')[0];
console.log(personFirstName);

const currentYear = new Date().getFullYear();
const personBirthYear = currentYear - person.getAge();
console.log(personBirthYear);

console.log(`'${personBirthYear.toString().slice(-2)}`);

console.warn(`Afiseaza propozita: “Ma numesc xxx si am yy ani!”
`);

console.log(`Ma numesc ${personName} si am ${personAge} ani.`);

console.warn(`Afiseaza numele intreg al persoanei folosind metoda getName()`);

console.log(personName);

console.warn(`Afiseaza varsta persoanei folosind metoda getAge()`);

console.log(personAge);

console.warn(
  `Afiseaza anul de nastere al persoanei, intr-o propozitie de felul “M-am nascut in aaaa.”`,
);

console.log(`M-am nascut in ${personBirthYear}.`);

console.warn(
  `Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”`,
);

console.log(
  `Ma numesc ${personName} m-am nascut acum ${personAge} ani in anul ${personBirthYear}!`,
);
