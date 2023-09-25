let number1 = 13;
let number2 = 1;
let number3 = 32;

if (number1 === number2 && number2 === number3) {
  console.log("Toutes les variables sont de valeurs égales.");
} else if (number1 === number2 || number1 === number3 || number2 === number3) {
  console.log("Deux des variables sont de valeurs égales.");
} else {
  console.log("Aucune des variables sont de valeurs égales.");
}
