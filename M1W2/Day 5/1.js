// Buatlah Program Untuk Menjalankan Skema Berikut

/**
 * Function [checkPalindrome] menerima satu buah parameter [num].
 * Function ini bertujuan untuk mem-validasi apakah parameter yang di input merupakan bilangan palindrome (dapat dibaca sama secara terbalik).
 * eg. 555, 55, dan 5 merupakan palindrome.
 * eg. 512 bukan merupakan palindrome karena menjadi 215 jika dibaca secara terbalik.
 *
 * Case:
 * 1. Jika parameter yang diterima bersifat falsy, maka mengembalikan ["Error"].
 * 2. Jika parameter yang diterima bukan bertipe number, maka mengembalikan ["Error"].
 * 3. Jika parameter yang diterima merupakan sebuah bilangan palindrome, maka mengembalikan [true].
 * 4. Jika parameter yang diterima bukan merupakan sebuah bilangan palindrome, maka mengembalikan [false].
 */

function checkPalindrome(num) {
  //  your code here
  if (!num || typeof num !== 'number') {
    return 'Error';
  }

  // Looping terbalik (decrement)
  const str = String(num); // mengubah params menjadi string
  let reverseStr = ''; // menampung str yang disusun terbalik
  // Case:
  // MUKTI
  // 01234  = 4
  // length = 5

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i]; // menambahkan karakter str dari belakang
  }

  console.log(str);
  console.log(reverseStr);

  // shorthand
  // return str === reverseStr;

  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome(123454321));
