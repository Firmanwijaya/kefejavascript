// Skema:
// Mencari banyak bilangan yang harus ditambah untuk menemukan bilangan kuadratnya
// ex: input = 5. output = 25 - 5 = 20

function getNum(num) {
  let i = num;
  let iSquare = Math.pow(num, 2); // Kuadrat dari num

  let count = 0;

  while (i !== iSquare) {
    i++;
    count++;
  }

  return count;
}

console.log(getNum(5)); // 25 - 5 = 20
console.log(getNum(-5)); // 25 - -5 = 30
console.log(getNum(0)); // 0 - 0 = 0
