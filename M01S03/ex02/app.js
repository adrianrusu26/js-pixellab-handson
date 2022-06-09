var person = {
  name: 'Adrian',
  surname: 'Rusu',
  age: 28,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

console.log(person.friends.larry);
console.log(person.skills.javaScript);

console.warn(
  `Calculeaza diferenta si afiseaza propozitia: “Steven este cu xx ani mai mare decat Larry.” folosind proprietatile name.`,
);

console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.larry.age) +
    ' ani mai mare decat ' +
    person.friends.larry.name +
    '.',
);

console.log(
  'Prietenii mei sunt: ' +
    person.friends.steven.name +
    +', ' +
    person.friends.carol.name +
    +' si ' +
    person.friends.larry.name +
    '.',
);

console.warn(
  'Afiseaza numarul de caractere al numelui de familie al lui Steven',
);

console.log(person.friends.steven.surname.length.toString());

console.log(person.friends.carol.age.toString());

console.log(2022 - person.friends.larry.age.toString());

console.warn(`Prietenul meu Steven Stevenson are 31 ani.`);
console.log(
  'Prietenul meu' +
    ' ' +
    person.friends.steven.name +
    ' ' +
    person.friends.steven.surname +
    ' are' +
    ' ' +
    person.friends.steven.age +
    ' ani' +
    '.',
);

console.warn(`Prietenii mei sunt: Steven, Carol si Larry.`);
console.log(
  'Prietenii mei sunt:' +
    ' ' +
    person.friends.steven.name +
    ',' +
    ' ' +
    person.friends.carol.name +
    ' si' +
    ' ' +
    person.friends.larry.name +
    '.',
);

console.warn(`Steven este cu 2 ani mai mare decat Carol.`);
console.log(
  person.friends.steven.name +
    ' este cu 2 ani mai mare decat ' +
    person.friends.carol.name +
    '.',
);

console.warn(`Prietena mea Carol Carolson are xx ani.`);

console.log(
  'Prietena mea ' +
    person.friends.carol.name +
    ' ' +
    person.friends.carol.surname +
    ' are' +
    ' ' +
    person.friends.carol.age +
    ' ani' +
    '.',
);

console.warn(
  `Afiseaza numarul de caractere al numelui de familie al lui Larry`,
);

console.log();
