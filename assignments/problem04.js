// type conversion

const inputYear = '1995';
console.log(Number(inputYear));
console.log(inputYear + 26); //199526
console.log(Number('Sachiko')); // NaN

console.log(String(26), 26);

// type coercion
console.log('I am ' + 26 + ' years old'); // -> string
console.log('23' - '10' - 3); //  -> num
console.log('23' > '18'); // -> boolean

let n = '1' + 1; // 11
n = n - 1;
console.log(n); // 10

console.log(2 + 3 + 4 + '5'); // '95'
console.log('10' - '4' - '3'- 2 + '5'); // '15'

// problems
console.log('9' - '5'); // '4'
console.log('19' - '13' + '17'); // '617'
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
