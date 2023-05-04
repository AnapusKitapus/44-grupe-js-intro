console.clear();

/*
IF - palyginimas

Palyginimo operatoriai:
Visi: >, <, >=, <=, ==, ===,
Naudotini: >, <, >=, <=, ===,
Nenaudotini: ==,

kodo sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ... else if () {}
if () {} else if () {} ... else if () {} else {}
*/

if (4 > 2) {
    console.log('taip');
}

if (7 < 1) {
    console.log('7 < 1');
}else{
    console.log('7 ne < uz 1');
}

const userAge = 10;
const ageLimit = 18;

if (userAge >= ageLimit) {
    console.log('uzeik....😎');
}else{
    console.log(`dar palauk ${ageLimit - userAge} metu...`);
}

console.log('-----------------------');

const diena = 1;

console.log('START');

if (diena === 1) {
    console.log('pirmadienis');
} else if (diena === 2) {
    console.log('antradienis');
} else if (diena === 3) {
    console.log('treciadienis');
} else if (diena === 4) {
    console.log('ketvirtadienis');
} else if (diena === 5) {
    console.log('penktadienis');
} else if (diena === 6) {
    console.log('sestadienis');
} else if (diena === 7) {
    console.log('sekmadienis');
} else {
    console.log('tokios dienos savaiteje nera');
}

console.log('END');

console.log('-----------------------');

// kodo nestinimas

const arSvieciaSaule = false;
const arLyja = false;

let kaDaryti = 'nezinau';

if (arSvieciaSaule) {
    kaDaryti = 'eisim i kiema';
    if (arLyja) {
        kaDaryti = 'ziurim i vaivorykste :O';
    } else {
        kaDaryti = 'deginames pleziuke B-)';
    }
} else {
    kaDaryti = 'kodinsim... ;-(';
    if (arLyja) {
        kaDaryti = 'koks skirtumas... vis vien busiu namie';
    } else {
        kaDaryti = 'stebim zvaigzdes';
    }
}

console.log(kaDaryti);

console.log('-----------------------');

console.log('START');

const day = 7;

if (day === 1) {
    console.log('pirm');
} else {
    if (day === 2) {
        console.log('antr');
    } else {
        if (day === 3) {
            console.log('trec');
        } else {
            if (day === 4) {
                console.log('ketv');
            } else {
                if (day === 5) {
                    console.log('penk');
                } else {
                    if (day === 6) {
                        console.log('sest');
                    } else {
                        if (day === 7) {
                            console.log('sekm');
                        } else {
    console.log('nieko nesakau :P');
                        }
                    }
                }
            }
        }
    }
}

console.log('END');

console.log('-----------------------');

const dd = 1;
let kokiaDiena = 'tokia diena neegzistuoja';

if (dd === 1) {
    kokiaDiena = 'pirmadienis';
}

if (dd === 2) {
    kokiaDiena = 'antradienis';
}

if (dd === 3) {
    kokiaDiena = 'treciadienis';
}

console.log(kokiaDiena);
/*
const siandien = 1;

const dienuPavadinimai = [
    'pirmadienis',
    'antradienis',
    'treciadienis',
    'ketvirtadienis',
    'penktadienis',
    'sestadienis',
    'sekmadienis',
]

const savaitesDiena = dienuPavadinimai[siandien - 1];

if (savaitesDiena === undefined) {
    console.log('>>>', 'tokios dienos nera');
} else {
    console.log('>>>', savaitesDiena);
}
*/
console.log('-------------------');

const siandien = 3.14;

function kokiaSavaitesDiena(dienosNr) {
    const dienuPavadinimai = [
        'pirmadienis',
        'antradienis',
        'treciadienis',
        'ketvirtadienis',
        'penktadienis',
        'sestadienis',
        'sekmadienis',
    ];

    const savaitesDiena = dienuPavadinimai[dienosNr - 1];

    if (savaitesDiena === undefined) {
        return 'tokios dienos nera';
    } else {
        return savaitesDiena;
    }
}

console.log(kokiaSavaitesDiena(siandien));
console.log(kokiaSavaitesDiena(1));
console.log(kokiaSavaitesDiena(2));
console.log(kokiaSavaitesDiena(7));
console.log(kokiaSavaitesDiena(8));