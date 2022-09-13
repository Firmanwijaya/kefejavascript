const data = [
  { name: 'Alpha', score: 80, gender: 'Male' },
  { name: 'Betha', score: 90, gender: 'Female' },
  { name: 'Charlie', score: 75, gender: 'Male' },
  { name: 'Delta', score: 89, gender: 'Female' },
  { name: 'Epsilon', score: 97, gender: 'Male' },
  { name: 'Fahrenheit', score: 100, gender: 'Male' },
  { name: 'Zeta', score: 78, gender: 'Female' },
];

// Menghitung rata-rata score dari peserta laki-laki dan peserta perempuan
let totalScoreMale = 0;
let totalScoreFemale = 0;
let totalMale = 0;
let totalFemale = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i].gender === 'Male') {
    totalMale++;
    totalScoreMale += data[i].score;
  }

  if (data[i].gender === 'Female') {
    totalFemale++;
    totalScoreFemale += data[i].score;
  }
}

console.log(`Rata-rata peserta laki-laki adalah ${totalScoreMale / totalMale}`);
console.log(
  `Rata-rata peserta perempuan adalah ${totalScoreFemale / totalFemale}`
);
