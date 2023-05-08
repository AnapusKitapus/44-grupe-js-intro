/*
TERNARY

klausimas ? teigiama reiksme : neigiama reiksme;

*/

const leidimas = 10 >= 18 ? 'pilnametis' : 'nepilnametis'; // kai nereikia kelti papildomu klausimu ir nera daug reiksmiu, tik teigiama ir neigiama, galima naudoti ternary
console.log(leidimas);

let aprrove = '';

if (10 >= 18) {
    aprrove = 'pilnametis';
} else {
    aprrove = 'nepilnametis'
}
console.log(aprrove);

const a = 1 ? 2 : 3;
console.log(a);
// isskaidyti pavyzdziai
const b = 1 
           ? 2 
           : 3 
               ? 4 
               : 5;
console.log(b);

const c = 1 < 2 
               ? 3 
                   ? 4 
                   : 5 
               : 6;
console.log(c);

const d = 1 > 2 
               ? 3 
               : 4 
                   ? 5 
                   : 6;
console.log(d);

const e = 1 < 2 
               ? 3 
                   ? 4 
                   : 5 
               : 6 
                   ? 7 
                   : 8;
console.log(e);