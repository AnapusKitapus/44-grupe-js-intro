/*
ARRAY - arejus (slang), sarasas, listas (slang), matrica, masyvas.
*/

const empty = [];
console.log(empty);

//                0   1  2  3  4
const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai);

//stengtis isvengti tokio atvejo
const random = [1, 'antras', 3, '4', 3.14, 'asdad'];
console.log(random);

//                 0          1        2       3
const vardai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(vardai);

const vardas1 = vardai[0];
console.log(vardas1);

const vardas2 = vardai[1];
console.log(vardas2);

console.log('---------------');

console.log(vardai[0]); //galima vardinti po viena
console.log(vardai[1]);
console.log(vardai[2]);
console.log(vardai[3]);
console.log(vardai[4]); // negalima vardinti daugiau reiksmiu, negu ju yra eiluteje
console.log(vardai[1000000]);
console.log(vardai[-1]); // negalima vardinti neigiamu reiksmiu
console.log(vardai[1.5]); // negalima vardinti reiksmiu po kablelio
console.log(vardai[0, 1, 2, 3]); // paims tik paskutine verte po kablelio, nesvarbu kokia eiles tvarka surasysime
console.log(vardai[3, 2, 1, 0]);

console.log('---------------');

//                0   1  2  3  4
const marks = [10, 2, 8, 4, 6];
console.log(marks);

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);