console.clear();

/*
String - tekstas

iniciavimo budai:
- vienguba kabute (')
- dviguba kabute (")
- backtick (`)
*/

const nickname = "Pravardenis";
const spaces = 'A              Z';
const username = 'Vardenis';
const empty = "";

console.log(nickname);
console.log(spaces);
console.log(username);
console.log(empty);

// Vienguba kabute (').

const kabute1 = "Vienguba kabute (').";
console.log(kabute1);

// Dviguba kabute (").

const kabute2 = 'Dviguba kabute (")';
console.log(kabute2);

// Vienguba (') ir dviguba (") kabutes.

const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
console.log(kabute12_1);
const kabute12_2 = "Vienguba (') ir dviguba (\") kabutes.";
console.log(kabute12_2);
const kabute12_3 = "Vienguba (\') ir dviguba (\") kabutes.";
console.log(kabute12_3);

const backslash1 = "\\";
console.log(backslash1);
const backslash2 = '\\\\';
console.log(backslash2);

// Sveiki, <vardas>!
const user1 = 'Petras';
const user2 = 'Jonas';
const user3 = 'Maryte';
const user4 = 'Ona';

const hi1 = 'Sveiki, ' + user1 + '!';
console.log(hi1);
const hi2 = 'Sveiki, ' + user2 + '!';
console.log(hi2);
const hi3 = 'Sveiki, ' + user3 + '!';
console.log(hi3);
const hi4 = 'Sveiki, ' + user4 + '!';
console.log(hi4);

// Hi, I am Vardenis Pavardenis and I like you!

const personName = 'Vardenis';
const personLastname = 'Pavardenis';
const personHi = 'Hi, I am ' + personName + ' ' + personLastname + ' and I like you!';
console.log(personHi);

// Vienguba (') ir dviguba (") kabutes.

const kabute777 = 'Vienguba (' + "'" + ') ir dviguba (' + '"' + ') kabutes.';
console.log(kabute777);

const kabute888 = "Vienguba (') ir" + ' dviguba (") kabutes.';
console.log(kabute888);

console.log('--------------');

const color = `red`;
console.log(color);

console.log('--------------');

const HTML = '<header>\r\n\
<img class="logo" src="#" alt="Logo">\r\n\
\t\t\<nav>\r\n\
\t\t\t\<a href="#">Home</a>\r\n\
\t\t\t\<a href="#">Home</a>\r\n\
\t\t\t\<a href="#">Home</a>\r\n\
\t\t\</nav>\r\n\
</header>';
console.log(HTML);

const backtickHTML = `<header>
    <img class="logo" src="#" alt="Logo">
    <nav>
        <a href="#">Home</a>
        <a href="#">Home</a>
        <a href="#">Home</a>
    </nav>
</header>`;
console.log(backtickHTML);

const labas = 'Labas rytas\rtau.';
console.log(labas);
const labas2 = 'Labas rytas\ntau.';
console.log(labas2);
const labas3 = 'Labas rytas\r\ntau.';
console.log(labas3);

const vardas = 'Jonas';
const pavarde = 'Jonaitis';

// Hi, I am Vardenis Pavardenis and I like you!
const personHi2 = `Hi, I am ${vardas} ${pavarde} and I like you!`;
console.log(personHi2);