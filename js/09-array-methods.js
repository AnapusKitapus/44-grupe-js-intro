console.clear();

// array valdymo galimybes

const marks = [];
console.log(marks);

marks.push(10); // galima ikelti papildomu elementu pagal eile naudojant (push)
marks.push(2);
marks.push(8);
console.log(marks);

marks.unshift(9); // galima ikelti priesais esama eilute papildomus elementus naudojant (unshift), kurie atsiras priekyje
marks.unshift(8);
marks.unshift(7);
console.log(marks);

marks.shift(); // trina elementus nuo eilutes pradzios (shift)
console.log(marks);

marks.pop(); // trina elementus nuo eilutes galo (pop)
console.log(marks);

console.log(marks[0]); // keli budai kaip paimti 1 elementa
console.log(marks.at(0));

console.log(marks[3]);
console.log(marks.at(3));

//const paskutinePozicija = 3; // kai zinomas elementu skaicius 0 1 2 3
//console.log(marks[paskutinePozicija]);
//console.log(marks.at(paskutinePozicija));

// kai norime iterpti ir paimti paskutini nari

marks.push(5);

const paskutinePozicija = marks.length - 1;
console.log(marks);
console.log(marks[paskutinePozicija]);
console.log(marks.at(paskutinePozicija));
console.log(marks.at(-1));
console.log(marks.at(-2));
console.log(marks.at(-3));
console.log(marks.at(-4));
console.log(marks.at(-5));

console.log(marks); // kai reikia pasitikrinti ar atitinka esami elementai
console.log(1, marks.includes(1));
console.log(2, marks.includes(2));
console.log(3, marks.includes(3));
console.log(5, marks.includes(5));
console.log(10, marks.includes(10));
console.log('labas', marks.includes('labas'));

const masyvasObjektu = [
    { a: 'a' },
    { b: 'b' },
    { c: 'c' },
];

console.log(masyvasObjektu.includes({ a: 'a' },)); // negali palyginti vidiniu elementu, nes nesupranta per {}

console.log('INDEX OF----------------'); // nurodo elemento pozicija

marks.push(-1);
console.log(marks);
console.log(marks.indexOf(8));
console.log(marks.indexOf(9));
console.log(marks.indexOf(10));
console.log(marks.indexOf(777)); // jeigu nera pozicionuojamo elemento visada rasys -1
console.log(marks.indexOf(4));
console.log(marks.indexOf(-1));

console.log('JOIN----------------'); // sujungia elementus

const visiPazymiai = marks.join();
console.log(visiPazymiai);
console.log(typeof visiPazymiai);

const visiPazymiai2 = marks.join(''); // sujungia elementus be kablelio
console.log(visiPazymiai2);

const visiPazymiai3 = marks.join(' -==- '); // sujungia elementus iterpdamas nurodytus simbolius, bei tarpus
console.log(visiPazymiai3);

console.log('REVERSE----------------'); // elementu apsukimas

const skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(skaiciai);

skaiciai.reverse(); // nuo galo iki pradzios apsuko
console.log(skaiciai); // neatsistato nes apsuka (reverse'ina) visam laikui

console.log('SLICE----------------'); // elementu karpymas

console.log(skaiciai);
console.log(skaiciai.slice(0)); // galima karpyti elementus nuo galu
console.log(skaiciai.slice(1));
console.log(skaiciai.slice(-4));
console.log(skaiciai.slice(2, 4)); // galima karpyti tam tikrus elementus is vidurio
console.log(skaiciai.slice(2, 5));
console.log(skaiciai.slice(2, -3));
console.log(skaiciai.slice(3, -3));

console.log('SPLICE----------------'); // iskirpimas ir iterpimas. galima iterpti elementus iskirpto elemento vietoje arba iterpti

console.log(skaiciai);
console.log(skaiciai.splice(2, 0, 'X')); //pirmas skaicius nurodo salia kurio elemento norime iterpti, antras skaicius nurodo norime trinti elementa ar nenorime, trecias skaicius nurodo simboli ar skaiciu kuri norime iterpti
console.log(skaiciai); // norint pasmatyti koks rezultatas gavosi, po terpimo/iskirpimo visada reikia tikrinti
console.log(skaiciai.splice(3, 1)); // pasirinktas trecias narys ir istrintas
console.log(skaiciai);

console.log(skaiciai.splice(-2, 2)); // istrinti paskutiniai 2 nariai
console.log(skaiciai);
console.log(skaiciai.splice(0, 1, 100)); // istrintas pirmas elementas ir vietoj jo iterptas 100
skaiciai[0] = 10; // grazinam 10 vietoj 100
skaiciai[skaiciai.length - 2] = 10; // pakeistas antras elementas nuo galo
console.log(skaiciai);