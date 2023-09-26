function multiplyByTwo() {
  const userNumber = prompt("Entrez un nombre entre 0 et 10 (inclus)");

  if (userNumber > 10 || userNumber < 0) {
    alert("Entrez un nombre entre 0 et 10 (inclus)");
    multiplyByTwo();
  } else {
    console.log("----------------------------------------------------------");
    for (let i = 0; i <= userNumber; i++) {
      console.log(i + " -> " + i * 2);
    }
    if (confirm("Continuer avec un autre chiffre ?")) {
      multiplyByTwo();
    } else {
      return;
    }
  }
}

multiplyByTwo();
