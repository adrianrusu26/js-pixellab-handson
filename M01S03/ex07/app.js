var name = 'Dragos';

console.log(`
    ${name} este instructor de programare. ${name} studiaza JavaScript de la 17 ani.
    Cand ${name} a absolvit facultatea si-a facut licenta in JavaScript.
    ${name} are si un master in tehnologii internet.
    ${name} este instructor Pixellab si preda JavaScript acolo.
`);

var person = {
  firstName: 'Adrian',
  lastName: 'Rusu',
  email: 'addybossu76@gmail.com',
  birthYear: 1993,
  pets: [
    {
      name: 'Poggo',
      species: 'dog',
      age: 4,
    },
    {
      name: 'Balauru',
      species: 'crocodile',
      age: 13,
    },
    {
      name: 'Snek',
      species: 'Boa python',
      age: 6,
    },
  ],
  zipCode: (4000213).toString(),
};

console.warn(
  `Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets. `,
);

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(
  `Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”`,
);

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani' +
    '.',
);

console.warn(
  `Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.`,
);

console.log((2022 - person.pets[2].age).toString());

console.warn(`Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.
`);

console.log((2022 - person.birthYear - person.pets[0].age).toString());

var difference = 25;
var petName = 'Poggo';

console.warn(
  `Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.`,
);

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);
