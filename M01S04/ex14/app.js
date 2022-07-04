var person = {
  firstName: 'Adrian',
  lastName: 'Rusu',
  birthYear: 1993,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(
  `Afiseaza in consola folosind metoda forEach() numele fiecarui animal. `,
);

person.pets.forEach(function (pet) {
  var petName = pet.name;
  console.log(petName);
});

console.warn(`Folosind o bucla for afiseaza suma anilor animalelor.`);
let sum = 0;
// person.pets.forEach(function (pet) {
//   var petAge = pet.age;
//   sum += pet.age;
// });
// console.log(sum);

for (i = 0; i <= person.pets.length - 1; i++) {
  var petAge = person.pets[i].age;
  sum += petAge;
}
console.log(sum);

console.warn(`Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.
`);

person.pets.forEach(function (pet) {
  var petSpecies = pet.species;
  var petAge = pet.age;
  var petName = pet.name;

  console.log(`${petName} este ${petSpecies} si are ${petAge} ani.`);
});

console.warn(`Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).
`);

for (var i = 0; i <= person.pets.length - 1; i++) {
  var ownerName = person.firstName;
  var petName = person.pets[i].name;
  var petAge = person.pets[i].age;
  var personAge = 2022 - person.birthYear;
  var ageDiff = personAge - petAge;

  console.log(
    `Intre ${ownerName} si ${petName} este o diferenta de ${ageDiff} ani.`,
  );
}

console.warn(
  `Folosind o bucla for afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”. `,
);

for (i = person.pets.length; i--; ) {
  var petName = person.pets[i].name;

  console.log(`Animalul meu se numeste ${petName}`);
}

console.warn(
  `Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.”`,
);

for (i = 0; i <= person.pets.length - 1; i++) {
  var petName = person.pets[i].name;
  var personAge = 2022 - person.birthYear;
  var petAge = person.pets[i].age;
  var ageDiff = personAge - petAge;

  if (i === person.pets.length - 1) {
    console.log(
      `${petName} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
    );
  }
}

console.warn(`Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.
`);

var message = 'Am ';
person.pets.forEach((pet, i) => {
  var petSpecies = pet.species;
  var punctuation = ', ';

  if (i === person.pets.length - 1) {
    var punctuation = '.';
  } else if (i === person.pets.length - 2) {
    var punctuation = ' si ';
  }

  message += `${petSpecies}${punctuation}`;
});
console.log(message);
