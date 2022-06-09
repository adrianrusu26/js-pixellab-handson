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
