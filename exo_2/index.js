const userAge = prompt("Entrez votre âge:");

if (userAge >= 21) {
  console.log("Vous êtes majeur à l'international !");
} else if (userAge >= 18) {
  console.log("Vous êtes majeur ! (uniquement dans certains pays)");
} else {
  console.log("Vous êtes mineur");
}
