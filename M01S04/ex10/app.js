var person = {
  name: 'Adrian',
  surname: 'Rusu',
  age: 28,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`
  Folosind obiectul person si forEach, afiseaza
  skillurile din pozitiile impare ale arrayului.
`);
person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(skill);
  }
});

console.warn(` In mod similar, afiseaza skillurile care contin litera a.`);

person.skills.forEach(function (skill) {
  if (skill.includes('a')) {
    console.log(skill);
  }
});

console.warn(
  ` Folosind forEach afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy.`,
);

var message = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, i, friends) {
  var punctuation = ', ';
  if (friends.length - 1 === i) {
    var punctuation = '.';
  }

  message += `${friend.name} ${friend.surname}${punctuation}`;
});
console.log(message);

console.warn(` Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca au varsta mai mare decat 30 inclusiv.
`);
var sum = 0;
person.friends.forEach(function (friend) {
  var friendAge = friend.age;

  if (friendAge >= 30) {
    sum += friendAge;
  }
});
console.log(sum.toString());

console.warn(
  `Folosind forEach, afiseaza suma anilor de nastere ai persoanelor care au varsta impara. `,
);

var sum = 0;
person.friends.forEach(function (friend) {
  var friendAge = friend.age;
  var birthYear = 2022 - friend.age;
  if (friendAge % 2 !== 0) {
    sum += birthYear;
  }
});

console.log(sum.toString());

console.warn(`Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends daca aceasta este mai mare sau egala cu 2 ani.
`);

person.friends.forEach(function (friend) {
  var persAge = person.age;
  var friendAge = friend.age;
  var ageDiff = Math.abs(persAge - friendAge);
  if (ageDiff >= 2) {
    console.log(ageDiff);
  }
});

console.warn(`
  Afiseaza fraza: "Intre Dragos si Larry este o
  diferenta de xx ani. Intre Dragos si Steven... "
`);
var message = '';
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);

  message +=
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani. ';
});
console.log(message.trim());

console.warn(`
  Folosind metoda reverse si apoi forEach, afiseaza
  in ordine inversa elementele arrayului skills.
`);
person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });

console.warn(
  `Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana.`,
);

person.skills.forEach(function (skill) {
  console.log(skill);
});

console.warn(`In mod similar, afiseaza skillurile care nu incep cu j.`);

person.skills.forEach(function (skill) {
  if (skill.startsWith('j') === false) {
    console.log(skill);
  }
});

console.warn(
  ` Folosind forEach afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."`,
);

var message = 'Numele mari ale prietenilor mei sunt ';
person.friends.forEach(function (friend, i, friends) {
  var punctuation = ', ';

  if (friends.length - 1 === i) {
    var punctuation = '.';
  }

  message += `${friend.surname}${punctuation}`;
});
console.log(message);

console.warn(
  ` Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends `,
);

var sum = 0;
person.friends.forEach(function (friend) {
  var friendAge = friend.age;
  sum += friendAge;
});
console.log(sum.toString());

console.warn(
  `Folosind forEach, afiseaza suma anilor de nastere a persoanelor `,
);

var sum = 0;
person.friends.forEach(function (friend) {
  var friendAge = friend.age;
  var birthYear = 2022 - friendAge;
  sum += birthYear;
});
console.log(sum.toString());

console.warn(` Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.
`);

person.friends.forEach(function (friend) {
  var personAge = person.age;
  var friendAge = friend.age;
  var ageDiff = Math.abs(personAge - friendAge);
  console.log(ageDiff.toString());
});

console.warn(`Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.
`);

person.friends.reverse().forEach(function (friend) {
  var friendName = friend.name;
  var friendSurname = friend.surname;
  var message = `${friendName} ${friendSurname}`;
  console.log(message);
});