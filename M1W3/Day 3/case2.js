const data = [
  { racks: ['A', 'B', 'C'] },
  { racks: ['A', 'C', 'E'] },
  { racks: ['B', 'C'] },
  { racks: ['D', 'E', 'F'] },
  { racks: [] },
];

// Mencari data dalam racks yang paling banyak

const result = {};

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].racks.length; j++) {
    if (result[data[i].racks[j]]) {
      result[data[i].racks[j]] += 1;
    } else {
      result[data[i].racks[j]] = 1;
    }
  }
}

console.log(result);
console.log(result);
