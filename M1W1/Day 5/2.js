// Buatlah Program Untuk Menjalankan Skema Berikut

/**
 * 1. Jika [nama] bersifat falsy, maka tampilkan [Error]
 * 2. Dapatkan sebuah bilangan bulat acak dari 1 sampai jumlah karakter [nama]
 * [guess] adalah sebuah kata misteri yang didapat dari skema berikut
 * 3. Jika:
 *    a. Hasil pekalian jumlah karakter [nama] dan bilangan bulat acak yang didapat:
 *       1) Jika hasilnya genap, maka [guess] ditambahkan [BA]
 *       2) Jika hasilnya ganjil, maka [guess] ditambahkan [AB]
 *    b. Hasil pembagian jumlah karakter [nama] dan bilangan bulat acak yang didapat:
 *       1) Jika hasilnya genap, maka [guess] ditambahkan [CA]
 *       2) Jika hasilnya ganjil, maka [guess] ditambahkan [AC]
 *    c. Hasil penjumlahan jumlah karakter [nama] dan bilangan bulat acak yang didapat:
 *       1) Jika hasilnya genap, maka [guess] ditambahkan [DA]
 *       2) Jika hasilnya ganjil, maka [guess] ditambahkan [AD]
 *    d. Hasil pengurangan jumlah karakter [nama] dan bilangan bulat acak yang didapat:
 *       1) Jika hasilnya genap, maka [guess] ditambahkan [EA]
 *       2) Jika hasilnya ganjil, maka [guess] ditambahkan [AE]
 * 4. Tambilkan [guess] yang di dapat
 *
 * Note:
 * 1. Hasil operasi harus selalu bilangan bulat
 * 2. Contoh Jawaban ABACADAE, ABCAADEA, BAACDAAE, dll
 *
 */

// Your Code Here
let name = 'MUKTI AJI';
let guess;

if (!name) {
  console.log('Error');
} else {
  const lengthOfName = name.length;
  // Math.random() => random 0 - 1 (exclude 1)
  // Math.floor() => bilangan bulat terkecil
  const randomNumber = Math.floor(Math.random() * lengthOfName) + 1;
  // random 0 - lengthOfName (exclude lengthOfName)
  guess = '';

  if ((lengthOfName * randomNumber) % 2 === 0) {
    guess = guess + 'BA'; // guess += 'BA'
  } else {
    guess = guess + 'AB'; // guess += 'AB'
  }

  if (Math.round(lengthOfName / randomNumber) % 2 === 0) {
    guess = guess + 'CA'; // guess += 'CA'
  } else {
    guess = guess + 'AC'; // guess += 'AC'
  }

  if ((lengthOfName + randomNumber) % 2 === 0) {
    guess = guess + 'DA'; // guess += 'DA'
  } else {
    guess = guess + 'AD'; // guess += 'AD'
  }

  if ((lengthOfName - randomNumber) % 2 === 0) {
    guess = guess + 'EA'; // guess += 'EA'
  } else {
    guess = guess + 'AE'; // guess += 'AE'
  }

  console.log(guess);
}
