var person = {
  name: 'Adrian',
  surname: 'Rusu',
  petOwner: false,
  age: 28,
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
      age: 31,
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
  `Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului.`,
);

person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(skill);
  }
});

console.warn(
  `Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... "`,
);

var message = '';
person.friends.forEach(function (friends) {
  var ageDiff = Math.abs(person.age - friends.age);

  message +=
    'intre ' +
    person.name +
    ' si ' +
    friends.name +
    ' este of diferenta de ' +
    ageDiff +
    ' ani. ';
});

console.log(message.trim());

console.log(
  `Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa elementele arrayului skills.`,
);

person.skills
  .slice()
  .reverse()
  .forEach(function () {
    console.log(skill);
  });
