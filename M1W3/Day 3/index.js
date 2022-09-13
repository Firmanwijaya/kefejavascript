// Data Type Reference (Object)
// Object (key) & (value)

// eg.1
const people = {
  height: 170,
  name: 'Mukti',
  isMarried: false,
  greet: () => 'Hello',
  hobbies: ['Playing Game', 'Watch Movie'],
  skin: {
    color: 'Sawo Matang',
  },
  'hair style': 'Mohawk',
};

// console.log(people);

// Noted: key => string

// Access Object
// console.log(people.greet());
// console.log(people.name);
// console.log(people['hobbies']);
// console.log(people['hobbies'][0]);

// Reassign
// people.name = 'Aji';
// console.log(people);

// Add new key
// people['isGraduate'] = true;
// console.log(people);

// TYPEOF
// console.log(typeof []);
// console.log(typeof {});

// Advance:
// console.log({} === {});

// reference:
const obj = { a: 1, b: 2 };
const obj2 = obj;
const obj3 = { ...obj };

obj.c = 3;

console.log(obj, obj2, obj3);

// HW:
// Cara merubah Object => Array
// Cara merubah Array => String
// Cara merubah String => Array
// Looping Object
