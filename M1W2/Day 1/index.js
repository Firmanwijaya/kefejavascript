// FUNCTION
// SYNTAX BASIC
// function function_name() { return data }

// eg. 1
function greeting() {
  // ... logic

  return 'Hi';
}

// How to use function?
// function_name()
// console.log(greeting());

const word = greeting();
// word = "Hi"

// eg. 2
function information() {
  if (1 < 2) {
    return 'Satu kurang dari dua';
  } else {
    return 'Satu tidak kurang dari dua';
  }
}

// Parameter => data yang akan di proses oleh function
// function function_name( [parameter] ) { return data }

// eg.1
function sayHi(name) {
  return `Hi ${name}`;
}

// console.log(sayHi('Mukti'));
// console.log(sayHi('Aji'));
// console.log(sayHi('Guno'));

// eg.2
// function sum(num1, num2) {
//   const total = num1 + num2;

//   return total;
// }

// console.log(sum(1, 2));
// console.log(sum(11, 22));

// Case 1: Jumlah parameter yang di berikan < jumlah parameter yang di butuhkan
// function sum(num1, num2) {
//   console.log(num1, num2);
//   const total = num1 + num2;

//   return total;
// }
// console.log(sum(2));

// Default value
// function sum(num1 = 0, num2 = 0) {
//   const total = num1 + num2;

//   return total;
// }

// console.log(sum());
// console.log(sum(2));
// console.log(sum(null, 4));

// Case 2: Jumlah parameter yang di berikan > jumlah parameter yang di butuhkan
// function sum(num1 = 0, num2 = 0) {
//   const total = num1 + num2;

//   return total;
// }

// Argument (...args) (rest parameter) sisa parameter yang di berikan
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Advance (Arrow Function)
// Syntax: var name_var = () => { return data }

// eg.1
const sum = (num1 = 0, num2 = 0) => {
  const total = num1 + num2;
  return total;
};

// eg.2 => tanpa return
// const times = (num1, num2) => {
//   return num1 * num2;
// };
// Shorthand
const times = (num1 = 1, num2 = 1) => num1 * num2;
