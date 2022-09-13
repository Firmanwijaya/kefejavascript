// Nested Loop

// Case 1:
// 'ABCDE' => 'AA', 'AB', 'AC', .... , 'ED', 'EE'

// const str = 'ABCDE';
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i], 'I');

//   for (let j = 0; j < str.length; j++) {
//     console.log(str[j], 'J');

//     console.log(str[i] + str[j]);
//   }
// }

// Case 2:
// 'ABCDE' => 'AB', 'AC', 'AD', 'AE', 'BC', ...., 'CD', 'CE', 'DE'
// const str = 'ABCDE';
// for (let i = 0; i < str.length; i++) {
//   for (let j = i + 1; j < str.length; j++) {
//     console.log(str[i] + str[j]);
//   }
// }

// Case 3:
// price = '18427'
// * 8 - 1 = 7 // profit = 0 => profit = 7
// * 4 - 1 = 3 // profit = 7
// * 2 - 1 = 1
// * 7 - 1 = 6
// * ...
// * 7 - 4 = 3
// * 7 - 2 = 5

// const price = '18427';
// let profit = 0;
// let buy = 0;
// let sell = 0;

// for (let i = 0; i < price.length; i++) {
//   for (let j = i + 1; j < price.length; j++) {
//     // console.log(price[j] - price[i]);

//     if (price[j] - price[i] > profit) {
//       profit = price[j] - price[i];
//       buy = price[i];
//       sell = price[j];
//     }
//   }
// }

// console.log(
//   `Profit maksimal yang didapat adalah ${profit} dengan harga beli di ${buy} dan harga jual di ${sell}`
// );

// Case 4. Includes Statement
// const name = 'Mukti';
// console.log(name.includes('z'));

// Case 5. Palindrome katak = katak (true), makan = nakam (false)

// RealCase
const name = 'mukti aji';
// m adalah huruf konsonan
// u adalah huruf vocal
//   adalah spasi

for (let i = 0; i < name.length; i++) {
  const dicConsonant = 'bcdfghjklmnpqrstvwxyz';
  const dicVocal = 'aeiou';
  const dicSymbol = '$&*'
  const dicNumber = '1234567890'

  for (let j = 0; j < dicConsonant.length; j++) {
    if (dicConsonant[j] === name[i]) {
      console.log(name[i], 'adalah konsonan');
      break;
    }
  }

  for (let j = 0; j < dicVocal.length; j++) {
    if (dicVocal[j] === name[i]) {
      console.log(name[i], 'adalah vocal');
      break;
    }
  }

  if (name[i] === ' ') {
    console.log(name[i], 'adalah spasi');
  }
}
