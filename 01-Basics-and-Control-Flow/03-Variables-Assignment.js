// VALUES AND VARIABLES
let country = "India";
let continent = "Asia";
let population = 1400; // population in millions

console.log(country);
console.log(continent);
console.log(population);

// DATA TYPES

let island = false;
let language;

console.log(typeof island);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


// BASIC OPERATORS

let halfPopulation = population / 2;

console.log(halfPopulation);

population++;

console.log(population);

let finlandPopulation = 6;

console.log(population > finlandPopulation);

let averagePopulation = 33;

console.log(population > averagePopulation);

let description = country + " is in " + continent +
    ", and its " + population +
    " million people speak " + "Marathi";

console.log(description);

// STRINGS AND TEMPLATE LITERALS
description = `${country} is in ${continent}, and its ${population} million people speak Marathi`;

console.log(description);


// LET, CONST AND VAR

language = "Marathi";

console.log(language);

const myCountry = "India";
const myContinent = "Asia";
const myIsland = false;

console.log(myCountry);
console.log(myContinent);
console.log(myIsland);


