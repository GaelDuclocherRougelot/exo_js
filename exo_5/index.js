function pairOuImpair() {
  const num = prompt("Entrez un nombre:");
  const evenOrOdd = prompt("pair ou impair ?");
  let i = 0;

  while (i <= num) {
    if (evenOrOdd === "pair" && i % 2 == 0) {
      console.log(i);
    } else if (evenOrOdd === "impair" && Math.abs(i % 2) == 1) {
      console.log(i);
    }
    i++;
  }
}

pairOuImpair();
