/*
OBJECT - objektas (visu duomenu tevas) {}
{
    key1 = value1,
    key2 = value2,
    key3 = value3,
}
array - supaprastintas object []
string - supaprastintas array 

Array (masyvas) - zymima [] (svarbus elemnetu eiliskumas, kas po ko eina)
Object (objektas) - zymima {} (eiliskumas nera svarbus, svarbu isvardinti kokie elementai sudaro)

*/

//[vardas, amzius, vedybinisStatusas] skaito paeiliui einancius elementus, jeigu sukeisime elementus vietomis, vistiek skaitys pagal eiliskuma (ziurint maryte)
const petras = ['Petras', 99, true];
const maryte = ['Maryte', false, 88]; //blogas eiliskumas

//Sveiki, mano vardas VARDAS ir man KAZKIEK metu.
const s1 = `Sveiki, mano vardas ${petras[0]} ir man ${petras[1]} metu.`;
console.log(s1);

const s2 = `Sveiki, mano vardas ${maryte[0]} ir man ${maryte[1]} metu.`;
console.log(s2);

const jonas = {
    name: 'Jonas',
    age: 77,
    isMarried: false,
};

const ona = {
    isMarried: true,
    name: 'Ona',
    age: 66,
};

console.log(ona);
console.log(ona['name']); //panaudojant [] galima istraukti norima elelmenta
console.log(ona['age']);
console.log(ona['isMarried']);
console.log(jonas);
console.log(jonas['name']);
console.log(jonas['age']);
console.log(jonas['isMarried']);

console.log('---------------------');

const random = {
    tekstas: 'Tekstas',
    skaicius: 777,
    arTiesa: true,
    kitas_variantas: 'mhm...',
    'su tarpu': 'ups...', // jeigu reikalingas tarpas tarp zodziu naudojame ''
};

console.log(random['tekstas']);
console.log(random['skaicius']);
console.log(random['arTiesa']);
console.log(random['kitas_variantas']);
console.log(random['su tarpu']); // kabuciu antra kart nenaudojame

const marks = [10, 2, 8, 4, 6]; // patogesnis variantas

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);

const pazymiai = {
    0: 10,
    1: 2,
    2: 8,
    3: 4,
    4: 6,
}; // maziau naudojamas arba nenaudojamas variantas

console.log(pazymiai[0]);
console.log(pazymiai[1]);
console.log(pazymiai[2]);

console.clear();

const student = {
    name: 'Chuck Norris',
    age: Infinity,
    movies: [
        {
            title: 'Walker: Texas ranger',
            year: 1990,
            actors: [
                'Chuck Norris1',
                'Chuck Norris2',
            ]
        },
        {
            title: 'Before me',
            year: -3000,
            actors: [
                'Chuck Norris3',
                'Chuck Norris4',
            ]
        },
        {
            title: 'Hell bound',
            year: 2000,
            actors: [
                'Chuck Norris5',
                'Chuck Norris6',
            ]
        },
    ]
};

console.log(student); // filtravimas iki smulkesniu elementu
console.log(student['name']);
console.log(student.name); // gaunam ta pati
console.log(student['age']);
console.log(student.age);
console.log(student['movies']);
console.log(student.movies);
console.log(student.movies.length);
console.log(student.movies[0]);
console.log(student.movies[0].title);
console.log(student.movies[0].year);
console.log(student.movies[0].actors);
console.log(student.movies[0].actors[0]);
console.log(student.movies[0].actors[1]);
console.log('-----------------------');
console.log(student.movies[0].title);
console.log(student.movies[1].title);
console.log(student.movies[2].title);