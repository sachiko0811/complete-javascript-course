let massMark = 78;
let massJohn = 95;
let heightMark = 1.69;
let heightJohn = 1.88;

// let massMark = 92;
// let massJohn = 85;
// let heightMark = 1.95;
// let heightJohn = 1.76;

let markBMI = massMark / (heightMark * heightMark);
let johnBMI = massJohn / (heightJohn * heightJohn);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI); // false -> markBMI is NOT higher than johnBMI