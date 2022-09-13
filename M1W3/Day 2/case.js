// Schema
// Sisa antrian?

const queues = [];
// Adi, Budi, Candra sedang mengantri di bank.
queues.push('Adi', 'Budi', 'Candra');
console.log('CASE I: ', queues);
// Adi dipanggil teller.
queues.shift();
console.log('CASE II: ', queues);
// Datang Nenek Fadhila dan dipersilahkan untuk duluan.
queues.unshift('Nenek Fadhila');
console.log('CASE III: ', queues);
// Karena Budi punya orang dalam, maka budi dipanggil duluan.
const newQueues = [];
for (let i = 0; i < queues.length; i++) {
  if (queues[i] !== 'Budi') {
    newQueues.push(queues[i]);
  }
}
console.log('CASE IV: ', newQueues);
