/*
FOR - loop/ciklas
kartojame operacijas tol kol reikia arba nustatyta kieki kartu
*/

const marks = [10, 2, 8, 4, 6];

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

let sum = 0;
let i=-1;
// sum += marks[i]
sum += marks[i = i + 1];
sum += marks[i = i + 1];
sum += marks[i = i + 1];
sum += marks[i = i + 1];
sum += marks[i = i + 1];
console.log(sum);