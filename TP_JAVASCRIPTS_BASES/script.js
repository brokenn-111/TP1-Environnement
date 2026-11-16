const prenom = "amine";
const nom = "ben ali";
let age = 20;
age = 21;
 
let ville = "sfax";

console.log(prenom);
console.log(nom);
console.log(age);
console.log(ville);

let nometudiant = "sarra";
let moyenne = 14.5;
let estInscrit = true;
let resultat;
let remarque = null;
console.log(typeof nometudiant);
console.log(typeof moyenne);
console.log(typeof estInscrit);
console.log(typeof resultat);
console.log(typeof remarque);
let note1 = 13;
let note2 = 17;
let note3 = 18;
let somme = note1 + note2 + note3;
let moyenneGenerale = somme / 3;
console.log(`Somme des notes : ${somme}`);
console.log(`Moyenne générale : ${moyenneGenerale}`);
let nombre1 = 10;
let nombre2 = 3;
let quotient = nombre1 - nombre2;
console.log(`soustraction : ${quotient}`);
let quotient = nombre1 + nombre2;
console.log(`addition : ${quotient}`);
let quotient = nombre1 * nombre2;
console.log(`multiplication : ${quotient}`);
let quotient = nombre1 / nombre2;
console.log(`division : ${quotient}`);
let quotient = nombre1 % nombre2;
console.log(`modulo : ${quotient}`);
let quotient = nombre1 ** nombre2;
console.log(`exponentiation : ${quotient}`);
let age1 = 20;
let age2 = 18;
console.log(age1 > age2);
console.log(age1 === age2);
console.log(age1 !== age2);
console.log(5 == "5");
console.log(5 === "5");
// Demander le prénom
let prenomUtilisateur = prompt("Entrez votre prénom :");
// Demander le nom
let nomUtilisateur = prompt("Entrez votre nom :");
// Demander l'âge
let ageUtilisateur = prompt("Entrez votre âge :");
// Afficher les informations dans la console
console.log(`Prénom : ${prenomUtilisateur}`);
console.log(`Nom : ${nomUtilisateur}`);
console.log(`Âge saisi : ${ageUtilisateur}`);
// Demander la première note et la convertir en nombre
let noteA = Number(prompt("Entrez la première note :"));
// Demander la deuxième note et la convertir en nombre
let noteB = Number(prompt("Entrez la deuxième note :"));
// Demander la troisième note et la convertir en nombre
let noteC = Number(prompt("Entrez la troisième note :"));
// Calculer la moyenne
let moyenneEtudiant = (noteA + noteB + noteC) / 3;
// Afficher la moyenne
alert(`Votre moyenne est : ${moyenneEtudiant}`);
// Afficher la moyenne dans la console
console.log(`Moyenne de l'étudiant : ${moyenneEtudiant}`);



let nomproduit = prompt("Entrez le nom de produit:");
let prix = prompt("Entrez le prix unitaire:");
let quantite = prompt("Entrez le quantité:");
let prixn = Number(prompt("donner le prix :"));
let quant = Number(prompt("donner la quantite :"));
let total = prixn * quant;
alert(`le total est : ${total}`);
console.log(`le total est : ${total}`);