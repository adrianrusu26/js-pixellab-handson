const person = {
  getName: () => {
    return 'Adrian Rusu';
  },

  getAge: () => {
    return 28;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  // return person.GetName
  // return person.GetAge
  return person[methodName]();
}

const personName = accessor('Name');
const personAge = accessor('Age');
const currentYear = new Date().getFullYear();
const personBirthYear = currentYear - accessor('Age');

console.warn(`Folosind accessorul salveaza numele mic al persoanei intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”
`);

console.log(`Eu sunt ${personName}.`);

console.warn(`Afiseaza anul de nastere al persoanei folosind anul curent.`);

console.log(personBirthYear.toString());

console.warn(
  `Afiseaza propozitia “Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa.”`,
);

console.log(
  `Ma numesc ${personName}, am ${personAge} ani si m-am nascut in anul ${personBirthYear}.`,
);

console.warn(`Folosind accessorul afiseaza numele persoanei.`);

console.log(accessor('Name'));

console.warn(`Afiseaza varsta persoanei.`);

console.log(personAge.toString());

console.warn(
  `Afiseaza anul de nastere al persoanei folosind anul curent. Intr-o propozitie de forma “M-am nascut in 1987.”`,
);

console.log(`M-am nascut in ${personBirthYear}.`);

console.warn(`Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”`);

console.log(`Ma numesc ${personName} si am ${personAge} ani!`);
