// Data Reference
// 1. Array
// 2. Object

// Noted:
// 1. bentuk array
// 2. penamaan var

// syntax var = []
// eg.1
const arr = ['string', 123, true, () => {}, []];
// Bentuk
const arrOfString = ['a', 'b', 'c', 'd'];
const arrOfNumber = [1, 2, 3, 4];
// Penamaan
const animals = ['duck', 'dolphin'];

// ITERABLE
// console.log(animals[1]);
// console.log(animals[1][0]);
// console.log(animals[1].length);

// LOOP
// eg.1
// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }
// eg.2
// for (const animal of animals) {
//   console.log(animal);
// }

// Method Array
// 1. push => menambahkan data di akhir array
// 2. pop => menghapus data di akhir array
// 3. unshift => menambahkan data di awal array
// 4. shift => menghapus data di awal array

const vehicles = ['truck', 'bus', 'taxi'];
// Push
// vehicles.push('car', 'speed boat');
// Pop
// vehicles.pop();
// Unshift
// vehicles.unshift('car', 'speed boat');
// Shift
// vehicles.shift();

// console.log(vehicles);

// Advance: ARRAY => Data Ref
// case 1:
let a = 10;
let b = a;

a = 7;

// console.log(a, b);

// case 2:
const foods = ['meat ball', 'satay'];
const makanan = foods;

foods.push('soup');
makanan.shift();

// console.log(foods, makanan);

// Fact:
// console.log(Boolean([])); // true
// console.log([] === []); // false

// Copy array
// eg.1 Loop
// eg.2 Destructure
const books = ['Harry Potter', 'Harry Potter 2'];
const films = [...books];

books.pop();

// console.log(books, films);

// Concat Array
console.log([...books, ...films]);
