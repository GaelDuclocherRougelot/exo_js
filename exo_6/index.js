const nombreDeLignes = prompt("Combien d'étages voulez-vous ?");

for (let i = 1; i <= nombreDeLignes; i++) {
  let ligne = "";

  // On ajoute des espaces pour aligner les '#'
  for (let j = 1; j <= nombreDeLignes - i; j++) {
    ligne += " ";
  }

  // On ajoute les '#' pour cette ligne
  for (let k = 1; k <= i; k++) {
    ligne += "#";
  }

  console.log(ligne);
}
