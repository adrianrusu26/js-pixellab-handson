var person = {
  name: 'Adrian',
  surname: 'Rusu',
  friends: {},
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {},
};

var steven = {
  name: 'Steven',
  surname: 'stevenson',
  friends: {},
};

var carol = {
  name: 'Carol',
  surname: 'carolson',
  friends: {},
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {},
};

person.friends.larry = larry;
person.friends.steven = steven;
person.friends.andra = andra;

// reverse

larry.friends.person = person;
steven.friends.person = person;
andra.friends.person = person;

// seteaza-l pe steven ca prieten al lui larry si andra

steven.friends.larry = larry;
steven.friends.andra = andra;
larry.friends.steven = steven;
andra.friends.steven = steven;

// carol + andra

carol.friends.andra = andra;
andra.friends.carol = carol;

delete person.friends.larry;
delete larry.friends.person;

console.warn(`
Afiseaza numele complet al lui Person folosind obiectul Larry.
`);

console.log(
  larry.friends.steven.friends.person.name +
    ' ' +
    larry.friends.steven.friends.person.surname,
);

console.warn(`
Afiseaza numele complet a lui Larry folosind obiectul Person.
`);

console.log(
  person.friends.steven.friends.larry.name +
    ' ' +
    person.friends.steven.friends.larry.surname,
);

console.warn(`
Folosind obiectul Andra afiseaza numarul total de caractere al numelui complet al lui Person.
`);

console.log(
  (andra.friends.person.name + andra.friends.person.surname).length.toString(),
);
