// Buatlah Program Untuk Menjalankan Skema Berikut

/**
 * 1. Jika [nama] bersifat falsy, maka tampilkan [Error]
 * 2. Jika [dungeon] bersifat falsy, maka tampilkan [Error]
 * 3. Jika [level] kurang dari 1 dan lebih dari 100, maka tampilkan [Error]
 * Ada 2 tipe dungeon: [Aqua] dan [Dragon]
 * 4. Jika tidak ada yang memenuhi, maka tampilkan [Dungeon yang diinput salah]
 * 5. Jika [Aqua], maka membutuhkan [level] minimal 25.
 *    a. Jika memenuhi, maka tampilkan [Anda akan mendapat 2000 exp. Bersiaplah!]
 *    b. Jika tidak memenuhi, maka tampilkan [Level anda kurang]
 * 6. Jika [Dragon], maka membutuhkan [level] minimal 75.
 *    a. Jika memenuhi, maka tampilkan [Anda akan mendapat 10000 exp. Bersiaplah!]
 *    b. Jika tidak memenuhi, maka tampilkan [Level anda kurang]
 */

function isErrorDataInput(name, dungeon, level) {
  return !name || !dungeon || level < 1 || level > 100;
}

function getDungeonResult(dungeon, level) {
  switch (dungeon) {
    case 'Aqua':
      if (level < 25) {
        return 'Level anda kurang';
      } else {
        return 'Anda akan mendapat 2000 exp. Bersiaplah!';
      }
    case 'Dragon':
      if (level < 75) {
        return 'Level anda kurang';
      } else {
        return 'Anda akan mendapat 10000 exp. Bersiaplah!';
      }
    default:
      return 'Dungeon yang diinput salah';
  }
}

let name = 'Mukti';
let dungeon = 'Dragon';
let level = 40;

if (isErrorDataInput(name, dungeon, level)) {
  console.log('Error');
} else {
  console.log(getDungeonResult(dungeon, level));
}
