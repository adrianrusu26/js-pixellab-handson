const person = {
  getName: function () {
    return 'Adrian Rusu';
  },

  getAge: function () {
    return 28;
  },
};

function accesor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  // return person.GetName
  // return person.GetAge
  return person[methodName]();
}

console.warn(`Folosind accesorul salveaza numele mic al persoanei intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”
`);

const personFirstName = accesor('Name');
console.log(`Eu sunt ${personFirstName}.`);
