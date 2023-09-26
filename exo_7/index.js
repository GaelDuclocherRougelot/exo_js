function birthday() {
  const date = prompt("Entrez votre date d'anniversaire (00/00/0000)");
  // on vérifie que le format de date soit correct via une Regex
  const regex = new RegExp(/\d{1,2}\/\d{1,2}\/\d{2,4}/);
  if (regex.test(date)) {
    // on récupere les informations en séparant la string
    const stringArr = date.split("/");
    // et on les remplace en number pour que la comparaison soit plus simple
    const day = Number(stringArr[0]);
    const month = Number(stringArr[1]);

    // on récupere la date et le mois actuel
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;

    if (day == currentDay && month == currentMonth) {
      alert(
        "C'est votre anniversaire ! vous profitez donc d'une réduction de -30% !"
      );
    } else {
      alert("Malheusement ce n'est pas encore votre anniversaire ;(");
    }
  } else {
    alert("Entrez une date au bon format");
    birthday();
  }
}

birthday();
