// Looping /Pengulangan
// Syntax: For Loop
// for ( nilai_awal; condition; increment/decrement) { ...action }

// eg.1
// for (let i = 0; i < 10; i = i + 1) {
// console.log(i);
// }

// eg.1a (shorthand)
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// Case:
// eg.2a (not working)
// for (let i = 0; i < -1; i++) {
//   console.log(i);
// }

// eg.2b (infinite loop)
// for (let i = 0; i < 1; i--) {
// console.log(i);
// }

// Break dan Continue
// eg.3a (break the loop)
// for (let i = 0; i < 1; i--) {
//   console.log(i);

//   if (i === -10) {
//     break;
//   }
// }

// eg.3b (continue the loop)
// for (let i = 0; i < 10; i++) {
//   if (i % 2) {
//     continue;
//   } else {
//     console.log(`${i} adalah bilangan genap`);
//   }
// }

// SYNTAX : WHILE LOOP
// while( condition ) { ...action }

// let i = 0;
// while (i < 10) {
// console.log(i);
// i++;
// }

// console.log(i);
// Perbedaan while loop dan for loop
// variable: while loop => global, for loop => scope
// condition: while loop => global, for loop => range

// eg.4
// let isTen = false;
// let i = 0;

// while (!isTen) {
//   i++;

//   if (i === 10) {
//     isTen = true;
//   }
// }

// console.log(isTen);
// console.log(i);

// SYNTAX: DO WHILE LOOP (explore sendiri)
