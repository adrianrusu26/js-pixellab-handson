console.warn(
  `Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface. Daca primeste un parametru, sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi. Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. (Foloseste structura switch).`,
);

const calculateSurface = function (L, l, h) {
  switch (arguments.length) {
    case 1:
      return L ** 2;

    case 2:
      return L * l;

    case 3:
      const paralelipipedTotalSurface = 2 * (L * l + L * h + l * h);
      return paralelipipedTotalSurface;
  }
};

console.warn(`Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16.
`);

const calculateCircleArea = function (r) {
  const circleArea = Math.PI * r ** 2;

  return circleArea;
};

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

console.warn(`Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”
Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”
`);

let pet = {
  getName: () => {
    return 'Gator';
  },

  getSpecies: () => {
    return 'Alligator';
  },

  getAge: () => {
    return 11;
  },
};

console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

const petAge = pet.getAge();

console.log(`Animalul meu are ${petAge} ani.`);
