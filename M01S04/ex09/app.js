var i = 101;

do {
  console.log(i);

  i++;
} while (i <= 100);

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).

var i = 1;

do {
  console.log(i);

  if (i === 50) {
    i++;
    break;
  }
} while (i < 100);
