const num = Number(prompt("De quel nombre veux-tu calculer la factorielle ?"));
function factoriel(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return num * factoriel(num - 1);
  }
}
console.log(factoriel(num));
