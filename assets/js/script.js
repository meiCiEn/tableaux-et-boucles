'use strict';

// Récuperation des éléments
const inputEntier = document.getElementById('input-entier');
const btnAjout = document.getElementById('btn-ajout');
const btnEffacer = document.getElementById('btn-effacer');
let affichageValeurs = document.getElementById('affichage-valeurs');
const form1 = document.getElementById('form-1');
const form2 = document.getElementById('form-2');
const form3 = document.getElementById('form-3');
const form4 = document.getElementById('form-4');

console.log(inputEntier, btnAjout, btnEffacer, affichageValeurs, form1, form2, form3, form4);

// insertion des données dans un tableau
function generateListItems(a) {
    let items = "";
    for (let index = 0; index < a.length; index++) {
        items += `<div class="chiffre"><p>${a[index]}</p></div>`;
    }
    return items;
}

let entiers = [];
btnAjout.addEventListener('click', () => {
    entiers.push(parseInt(inputEntier.value));
    console.table(entiers); //to confirm it has been added to the array 
    affichageValeurs.innerHTML = (generateListItems(entiers));
});

btnEffacer.addEventListener('click', () => {
    entiers.length = 0;
    console.table(entiers);
    affichageValeurs.innerHTML = "";
});

affichageValeurs.innerHTML =
    `${generateListItems(entiers)}`;

let randomArray = [1,2,3,4,5,5,2,6];

// Creation of buttons and attributes using JS

const btnSum = document.createElement("button");
btnSum.setAttribute("id", "sum");
btnSum.setAttribute("type", "submit");
btnSum.innerText = "Somme";

const btnAvg = document.createElement("button");
btnAvg.setAttribute("id", "average");
btnAvg.setAttribute("type", "submit");
btnAvg.innerText = "Moyenne";

const btnMin = document.createElement("button");
btnMin.setAttribute("id", "minimum");
btnMin.setAttribute("type", "submit");
btnMin.innerText = "Minimum";

const btnMax = document.createElement("button");
btnMax.setAttribute("id", "maximum");
btnMax.setAttribute("type", "submit");
btnMax.innerText = "Maximum";

const btnSort1 = document.createElement("button");
btnSort1.setAttribute("id", "sort1");
btnSort1.setAttribute("type", "submit");
btnSort1.innerText = "Tri à bulles";

const btnSort2 = document.createElement("button");
btnSort2.setAttribute("id", "sort2");
btnSort2.setAttribute("type", "submit");
btnSort2.innerText = "Tri par insertion";

const btnNoDuplicate = document.createElement("button");
btnNoDuplicate.setAttribute("id", "no-duplicate");
btnNoDuplicate.setAttribute("type", "submit");
btnNoDuplicate.innerText = "Tableau sans doublon";

const btnNbElem = document.createElement("button");
btnNbElem.setAttribute("id", "nb-elements");
btnNbElem.setAttribute("type", "submit");
btnNbElem.innerText = "Nombre d'éléments";

const btnNbElem2 = document.createElement("button");
btnNbElem2.setAttribute("id", "nb-elements-2");
btnNbElem2.setAttribute("type", "submit");
btnNbElem2.innerText = "Nombre d'éléments sans doublon";

// Extraire l'id d'un élément
function getID(a) {
let elemID = (a.id);
return elemID;
};

function getTag(a) {
    let elemTag = (a.tagName);
    console.log(elemTag);
    return elemTag;
};

function modifyID(elemA, elemB) {
    let oldID = (getID(elemA));
    let tag = (getTag(elemB));
    console.log(tag);
    let newID = (`${tag}-${oldID}`);
    console.log(newID);
    return newID;
}

// Creation of a results field for each button

function createResultsField(btnName, array) {
    const buttons2 = document.getElementById("buttons-2");
    console.log(buttons2);
    // create parent div tag
    const divButtonResult = document.createElement("div");
    buttons2.appendChild(divButtonResult);
    // create id for parent div tag
    const divID = modifyID(btnName, divButtonResult);
    // add id to parent div tag
    divButtonResult.setAttribute("id", divID);
    console.log(divButtonResult);
    // make button element (btnName) child of parent div
    divButtonResult.appendChild(btnName);
    console.log(divButtonResult);
    // create p element to display result
    const pResult = document.createElement("p");
    // add a class
    const pID = modifyID(btnName, pResult);
    pResult.classList.add("p-result");
    pResult.setAttribute("id", pID);
    console.log(pResult);
    // append pResult to parent div
    divButtonResult.appendChild(pResult);
}

createResultsField(btnSum);
createResultsField(btnAvg);
createResultsField(btnMin);
createResultsField(btnMax);
createResultsField(btnSort1);
createResultsField(btnSort2);
createResultsField(btnNoDuplicate);
createResultsField(btnNbElem);
createResultsField(btnNbElem2);


// The calculations

function sumArray(array) {
    let sum = 0;

    for (let index = 0; index < array.length; index++) {
        sum += parseInt(array[index]);
    }
    console.log(sum);
    return sum
}

sumArray(entiers);
sumArray(randomArray);

// display result of addition when "Somme" button clicked
btnSum.addEventListener('click', () => {
   const pSum = document.getElementById("P-sum");
   pSum.innerText =`${sumArray(entiers)}`;
    });

    // ENDED HERE. DO THE REST FOR THE OTHER SUMS/BUTTONS

function avgArray(array) {
    let sum = 0;

    for (let index = 0; index < array.length; index++) {
        sum += parseInt(array[index]);
    }
    const avg = sum/array.length;
    return avg;
}

console.log(`The average is ${avgArray(randomArray)}`);
console.log(`The average is ${avgArray(entiers)}`);

function maxArray(array) {
    let max = array[0];
    for (let index = 0; index < array.length; index++) {
        if (array[index] > max) {max = array[index];}
    }
    return max;
}

console.log(`The max is ${maxArray(randomArray)}`);
console.log(`The max is ${maxArray(entiers)}`);

function minArray(array) {
    let min = array[0];
    for (let index = 0; index < array.length; index++) {
        if (array[index] < min) {min = array[index];}
    }
    return min;
}

console.log(`The min is ${minArray(randomArray)}`);
console.log(`The min is ${minArray(entiers)}`);

function nbElemArray(array) {
    let nbElem = array.length;
    return nbElem;
}

console.log(`The length is ${nbElemArray(randomArray)}`);
console.log(`The min is ${nbElemArray(entiers)}`);

function removeDuplicates(array) {
let sansDoublon = [];
for (let index = 0; index < array.length; index++) {
    let val = array[index];
    if (sansDoublon.indexOf(val) == -1) {
        sansDoublon.push(val);
    }
}
return sansDoublon;
}

console.log(`Values of array without duplicates : ${removeDuplicates(randomArray)}`);
console.log(`Values of array without duplicates : ${removeDuplicates(entiers)}`);

function nbElemNoDuplicates(array) {
    let sansDoublon = [];
for (let index = 0; index < array.length; index++) {
    let val = array[index];
    if (sansDoublon.indexOf(val) == -1) {
        sansDoublon.push(val);
    }
}
let nbElem = sansDoublon.length;
return nbElem;
}

console.log(`Length of array without duplicates : ${nbElemNoDuplicates(randomArray)}`);
console.log(`Length of array without duplicates : ${nbElemNoDuplicates(entiers)}`);

// Tri à bulles

// Le tri à bulles un algorithme de tri. Il consiste à comparer répétitivement les éléments consécutifs d'un tableau, 
// et à les permuter lorsqu'ils sont mal triés.
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            // inverser les valeurs
            if(array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]];
              }
        }
    }
    return array;
}

console.log(`Array ordered by bubble sort : ${bubbleSort(randomArray)}`);
console.log(`Array ordered by bubble sort : ${bubbleSort(entiers)}`);

// Tri par insertion

// En informatique, le tri par insertion est un algorithme de tri classique. 
// La plupart des personnes l'utilisent naturellement pour trier des cartes à jouer.

// filling the results field

function fillResultsField() {

}

// showResult.setAttribute("id","me");
// zoneResultat.appendChild(showResult);
// console.log(btnSum, zoneResultat, showResult);
// showResult.innerHTML = (`this is the result : ${showResult}`);

console.log(`result-${bubbleSort(randomArray)}`);

// function showResults() {

// }
// let resultShown = (sumArray(randomArray));



// btnMoyenne.addEventListener('click', () => {
//     showResult.innerHTML = (avgArray(entiers));
//     });





// const inputNomJoueur = document.getElementById('nom-joueur');
// const btnAjout = document.getElementById('btn-ajout');
// const btnValid = document.getElementById('btn-valid');
// const zoneResult = document.getElementById('result-zone');
// const form2 = document.getElementById('form-2');
// // const form1 = document.getElementById('form-1');

// console.log(inputNomJoueur, btnAjout, btnValid, form2, zoneResult);

// // Les tableaux de joueurs et de scores
// let joueurs = [];
// let scoreJoueur = [];

// // Encodage des joueurs
// btnAjout.addEventListener('click', () => {
//     let nomJoueurValeur = inputNomJoueur.value.toUpperCase();

//     inputNomJoueur.value = '';

//     if (joueurs.includes(nomJoueurValeur)) {
//         alert('Le nom existe déjà');

//     } else {
//         joueurs.push(nomJoueurValeur);
//         scoreJoueur.push(0);
//     }
//     console.table(joueurs);
//     console.table(scoreJoueur);
// });



// // Génération du formulaire de score
// btnValid.addEventListener('click', () => {

// form1.classList.add( 'hidden' );
// form2.classList.remove( 'hidden' );

//     let count = 1;
//     const NomMatch = document.createElement('h3');
//     form2.appendChild(NomMatch);
//     NomMatch.innerText = `Match n° ${count}`;

//     for (let index = 0; index < joueurs.length; index++) {

//         const div = document.createElement('div');
//         form2.appendChild(div);

//         const label = document.createElement('label');
//         label.innerText = joueurs[index];
//         label.setAttribute('for', `score_${joueurs[index]}`);
//         div.appendChild(label);

//         const inputScore = document.createElement('input');
//         inputScore.setAttribute('id', `score_${joueurs[index]}`);
//         inputScore.setAttribute('type', 'number');
//         div.appendChild(inputScore);

//     }

//     const btnSave = document.createElement('button');
//     btnSave.innerText = 'Enregister';
//     form2.appendChild(btnSave);

//     // Sauvegarde des score
//     btnSave.addEventListener('click', () => {
//         for (let k = 0; k < joueurs.length; k++) {

//             const inputScore = document.getElementById(`score_${joueurs[k]}`);
//             const score = parseInt(inputScore.value);
//             // console.log(inputScore);

//             inputScore.value = '';

//             // Ajout le score dans le tableau des scores
//             scoreJoueur[k] += score;  // scoreJoueur[k] = scoreJoueur[k] + score
//         }
//         console.table(scoreJoueur);
//         count++;

//         NomMatch.innerText = `Match n° ${count}`;
//     });
// })
// //
