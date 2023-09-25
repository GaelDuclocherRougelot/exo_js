const firstname1 = prompt("Veuillez entrer un premier prénom"); // prénom 1
const firstname2 = prompt("Veuillez entrer un deuxième prénom"); // prénom 2
const mood1 = prompt("Veuillez entrer un premier état du jour"); // état de la première personne
const mood2 = prompt("Veuillez entrer un second état du jour"); // état de la seconde personne
const hour = prompt("Veuillez entrer une heure"); // réponse à la question 'quelle heure est-il
const day = prompt("Veuillez entrer un jour"); // la première personne rentre manger chez elle tout les {day}s

console.log(firstname1 + ": Bonjour !");
console.log(firstname2 + ": Bonjour " + firstname1 + " ! Comment vas-tu ?");
console.log(firstname1 + mood1 + ", et toi ?");
console.log(firstname2 + mood2 + ", je te remercie.");
console.log(firstname1 + ": Quelle heure est-il ?");
console.log(firstname2 + ": Il est " + hour + " heures.");
console.log(firstname1 + ": D'acc merci.");
console.log(firstname2 + ": Où manges-tu aujourd’hui ?");
console.log(firstname1 + ": Je rentre chez moi comme tous les " + day + "s");
console.log(firstname2 + ": D'acc.");
