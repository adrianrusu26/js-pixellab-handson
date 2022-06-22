var friends = [
  {
    name: 'Adrian',
    surname: 'Rusu',
  },
  {
    name: 'Larry',
    surname: 'Larryson',
  },

  {
    name: 'Steven',
    surname: 'Stevenson',
  },

  {
    name: 'Carol',
    surname: 'Carolson',
  },

  {
    name: 'Andra',
    surname: 'Andrason',
  },
];

console.warn(
  `Folosind o bucla for afiseaza proprietatea surname a tuturor obiectelor din arrayul friends.`,
);

for (var i = 0; i < friends.length; i++) {
  var friend = friends[i];

  console.log(friend.surname);
}

console.warn(
  `Afiseaza numele complet inversat al tuturor prietenulor insa o data ce l-ai gasit pe steven, opreste bucla cu ajutorl keywordului break si afiseaza propozitia:"m-am oprit la Stevenson Steve "`,
);
var friendsLength = friends.length;

for (var i = 0; i < friends.length; i++) {
  var friend = friends[i];

  if (friend.name === 'steven') {
    console.log('M-am oprit la ' + friend.surname + ' ' + friend.name);
  }

  console.log(friend.surname + ' ' + friend.name);
}

console.warn(
  `Folosind keywordul continue, afiseaza numele complet inversat al prietenilor, doar daca numarul de caractere total al numelor lor este mai mare de 13 sub forma de propozitii “Prenume Nume are mai mult de 13 caractere.”.`,
);

for (var i = 0; i < friendsLength; i++) {
  var friend = friends[i];

  if ((friend.surname + friend.name).length < 13) {
    continue;
  }

  console.log(
    friend.surname + ' ' + friend.name + ' are mai mult de 13 caractere.',
  );
}

console.warn(
  `Folosind o bucla for afiseaza proprietatea name a tuturor obiectelor din arrayul friends.`,
);

for (var i = 0; i < friends.length; i++) {
  var friend = friends[i];

  console.log(friend.name);
}

console.warn(`Afiseaza numele complet al tuturor prietenilor.`);

for (var i = 0; i < friends.length; i++) {
  var friend = friends[i];

  console.log(friend.name + ' ' + friend.surname);
}

console.warn(
  `Folosind keywordul break, afiseaza numele complet al prietenilor dar opeste bucla la primul surname care are numarul de caractere mai mare sau egal decat 9 si afiseaz-l intr-o propozitie de forma “M-am oprit la Nume Prenume.”.`,
);

for (var i = 0; i < friends.length; i++) {
  var friend = friends[i];
  var surname = friends[i].surname;

  if (surname.length >= 9) {
    console.log(`M-am oprit la ${friend.surname} ${friend.name}.`);

    break;
  }

  console.log(friend.name + ' ' + friend.surname);
}
