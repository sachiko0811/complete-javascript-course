// trutthy and falsy values

// -> falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Sachiko'));  // true
console.log(Boolean({})); //  true
console.log(Boolean('')); // false

// equality operators: == vs. ===
// let numNeighbours = prompt('How many neighbor countries does your country have?'); // -> as string
let numNeighbours = Number(prompt('How many neighbour countries does your country have?')); // -> this helps us prevent bugs
// numNeighbours = 1;

if(numNeighbours === 1) {
    console.log("Only 1 border");
} else if (numNeighbours >= 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}

// if else statement