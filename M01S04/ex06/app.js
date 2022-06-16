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

console.warn(
  `Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.`,
);

for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (i % 2 !== 0) {
    console.log(person.skills[i]);
  }
}

console.warn(`In mod similar, afiseaza skillurile care NU incep cu j.`);

for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill.startsWith('j') === false) {
    console.log(skill);
  }
}

console.warn(``);

var message = 'Prietenii mei se numesc: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }
  message = message + friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);

console.warn(
  `afiseaza difrente de varsa dintre persoane si prietenii din arrayul friends doar daca acesta este mai mare de 2 ani.`,
);

for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  if (ageDiff > 2) {
    console.log(ageDiff);
  }

  console.log(ageDiff);
}

console.warn(
  ` FOlosind proprietatea length a arrayului skills si o bucla for, afiseaza in ordine inversa elementele arrayului skills.Atentie, va trebui sa  numeri invers de la length la`,
);

for (var i = person.skills.length - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}

console.warn(`Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.
`);
let sum1 = 0;
for (i = 0; i < person.friends.length - 1; i++) {
  var friend = person.friends[i];
  var friendAge = person.friends[i].age;

  sum1 += person.friends[i].age;

  if (30 <= friendAge) {
    continue;
  }
}
console.log(sum1.toString());

console.warn(`Folosind un for, afiseaza suma anilor de nastere a persoanelor.
`);

let sum2 = 0;
for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var friendAge = person.friends[i].age;
  var birthDate = 2022 - friendAge;
  sum2 += birthDate;
}
console.log(sum2.toString());

console.warn(`Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara.
`);
var message = '';
var message1 = 'Intre ';
var message2 = ' si ';
var message3 = ' este o diferenta de ';
var message4 = ' ani';

for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = '.';
  var friendAge = person.friends[i].age;
  var ageDiff = Math.abs(person.age - friendAge);

  if (friendAge % 2 !== 0) {
    message =
      message1 +
      person.name +
      message2 +
      friend.name +
      message3 +
      ageDiff +
      message4 +
      punctuation;
  }
  console.log(message);
}

console.warn(`Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana
`);

for (i = 0; i < person.skills.length; i++) {
  var skills = person.skills[i];

  console.log(skills);
}

console.warn(`In mod similar, afiseaza skillurile care incep cu c`);

for (i = 0; i < person.skills.length; i++) {
  var skills = person.skills[i];

  if (skills.startsWith('c') === true) {
    console.log(skills);
  }
}

console.warn(
  `Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx, xxx."`,
);

var message = 'Numele de familie ale prietenilor mei sunt: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }
  message = message + friend.surname + punctuation;
}
console.log(message);

console.warn(
  `Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends `,
);
let sum3 = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friendAge = person.friends[i].age;
  sum3 += friendAge;
}
console.log(sum3.toString());

console.warn(
  `Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.`,
);

for (var i = 0; i < person.friends.length; i++) {
  var personAge = person.age;
  var friendAge = person.friends[i].age;
  var ageDiff = Math.abs(personAge - friendAge);

  console.log(ageDiff);
}

console.warn(
  `Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.`,
);

var message = '';
var message1 = 'Intre ';
var message2 = ' si ';
var message3 = ' este o diferenta de ';
var message4 = ' ani';

for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = '.';
  var friendAge = person.friends[i].age;
  var ageDiff = Math.abs(person.age - friendAge);

  message =
    message1 +
    person.name +
    message2 +
    friend.name +
    message3 +
    ageDiff +
    message4 +
    punctuation;

  console.log(message);
}

console.warn(
  `Afiseaza fraza “Prietenii mei sunt: xxx yyy, xxx yyy, xxx yyy.” in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).`,
);

var message = 'Prietenii mei sunt: ';
for (var i = person.friends.length - 1; i >= 0; i--) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === 0) {
    punctuation = '.';
  }
  message = message + friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);
