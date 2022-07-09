console.clear();

function sum(a, b, callback) {
   const ats = a + b

   callback(ats);
}

const numbers = [
   [3, 7],
   [14, 2],
   [-3, 18]
];

for (const nums of numbers) {
   const [pirmas, antras] = nums

   sum(pirmas, antras, (atsakymas) => {
      console.log(`${pirmas} + ${antras} = ${atsakymas}`);
   })
}

const pirmaFunc = (callback) => {
   setTimeout(() => {
      console.log('Pirma f-ja');
      callback();
   }, 1000);
}

const antraFunc = () => {
   setTimeout(() => {
      console.log('Antra f-ja');
   }, 1000);
}
pirmaFunc(antraFunc);


