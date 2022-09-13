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
// Function check parameter
function isAcceptedParams(params) {
  if (!params || typeof params !== 'number') {
    return false;
  }

  return true;
}

// Function check palindrome
function isPalindrome(params) {
  const str = String(params);
  let reverseStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
}

function checkPalindrome(num) {
  // Check palindrome ???
  // Check parameter ???
  if (isAcceptedParams(num)) {
    return isPalindrome(num);
  }

  return 'Error';
}
