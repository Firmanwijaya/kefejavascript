// FUNCTION
// function sum(num1, num2) {
//   return num1 + num2;
// }

function randomNumber() {
  return Math.random();
}

const a = randomNumber();
const b = randomNumber();
// console.log(sum(a, b));

// RECURSIVE ??
function factorial(num) {
  if (!num) {
    return 1;
  }

  return num * factorial(num - 1);
}

// Faktorial (5! => 1.2.3.4.5 === 5.4.3.2.1 )
// console.log(factorial(5));

// CALLBACK ??
function flag() {
  return 'FLAG';
}

function test(cb) {
  return cb();
}

// console.log(test(flag));

// ANONYMOUS FUNCTION ??
// console.log(
//   test(() => {
//     return 'ANONYM';
//   })
// );

function sum(num1, num2, cb) {
  return cb(num1 + num2);
}

console.log(
  sum(5, 6, (num) => {
    return `Total penjulahannya adalah ${num}`;
  })
);
