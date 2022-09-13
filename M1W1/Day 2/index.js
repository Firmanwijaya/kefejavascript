// How to display something
console.log('Halo Dunia...');

// Variable Declaration
// 1. var ( Hoisting Concept )
// 2. let => No constant variable
// 3. const => Constant variable

// Example:
// Syntax : Declaration variable_name = value
let name = 'Mukti Aji Guno';
const phi = 3.14;

// Syntax : Declation variable_name ( return undefined ) ( for let only )
let price;

// Data Type Primitive
// 1. Undefined => Type data primitive yang value tidak terdefinisikan
// 2. Null => Type data primitive yang value tidak ada

// 3. Boolean => Nilai Kebenaran (true or false)
let isFourPrime = false;
let isTrue = 2 < 9;
// Op Boolean => Dan / Atau ( && , || )
let isTrue2 = 2 < 9 && 9 < 2;

// 4. Number
let one = 1;
// Op Boolean =>
// Basic ( * , / , + , - )
let num = 100 / 8;
// Modulo ( % ) => Sisa hasil pembagian
let sisa = 100 % 8;
// Object Number ( Math )
let random = Math.random();

// 5. String => Kata
let str = 'Kawah Edukasi';
// Length => mengetahui jumlah char
let longStr = str.length;
// Indexing => String is Iterable
let char = str[7];

// Reassign Variable ( let only )
let nama = 'Mukti Aji Guno';
// console.log(nama);
// Syntax : variable_name = value
nama = 'Muktzy';
// console.log(nama);

// Concatination ( + )
let num2 = 4 + 5; // 9
let str2 = 'Mukti' + 'Aji'; // 'MuktiAji'
let numstr = 'Mukti' + 5;

// typeof
// console.log(typeof num2);
// console.log(typeof str2);
// console.log(typeof numstr);

// Templete Literal
const myName = 'Muktzy';
const myAge = 23;
const myAddress = 'Jaksel';

// console.log(myName + myAge + myAddress);
// console.log(`My Name is ${myName}`);

// Op Boolean II ( == === != !== )
// console.log(1 == '1'); // Yang dibandingkan value only
// console.log(1 === '1'); // Yang dibandingkan value dan type
// console.log(1 != '1');
// console.log(1 !== '1');

// Op Boolean III ( truthy falsy )
// Number:
// Truly => Semua bilangan kecuali 0
// Falsy => 0, dll
// String:
// Truly => Semua string kecuali string kosong
// Falsy => ""
console.log(Boolean('Kawah Edukasi'));
// Boolean === !!
console.log(!!'Kawah Edukasi');

// Mengganti nilai truthy / falsy ( ! )
console.log(!'Kawah Edukasi');
