// Creaza in director un alt script node
// care sa citeasca informatii din fisierul
// file.txt, sa adauge textului citit propozitia:
//  “This is our node script!”. In final, afiseaza rezultatul
// in consola.

const fs = require('fs');
const data = fs.readFileSync('./file.txt', 'utf-8');
console.log(`${data} this is our node script!`);
