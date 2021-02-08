// basic operators

let population = 120;
let halfPopulation =  population / 2;
console.log(halfPopulation);

halfPopulation ++;
console.log(halfPopulation);

let japan = 120;
// let japan = 13;
let finland =  6;
console.log(japan > finland);
let ave = 33;
console.log(japan < ave);

// let description = "Portgal is  in Europe, and its 11 million people speak portuguese";
let country = "Japan";
let language = "japanese";
let continent =  "Asia";
let description = country + " is in " + continent + "," + " and its " + japan +  " million people speak " + language;
console.log(description);

// strings and template liiterals
let description2 = `${country} is in ${continent}, and its ${japan} million people speak ${language}`;
console.log(description2);

// taking decisions: if / else statements
if(japan > ave) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${ave - japan} below average`);
}