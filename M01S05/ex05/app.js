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

const personName = person.getName();
const personFirstName = personName.split(' ')[0];
console.log(personFirstName);

const currentYear = new Date().getFullYear();
const personBirthYear = currentYear - person.getAge();
console.log(personBirthYear);

console.log(`'${personBirthYear.toString().slice(-2)}`);
