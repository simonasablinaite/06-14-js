console.clear();


class Dog {
  constructor(name) {
    this.name = name;
    this.boneCount = 0;
    this.sound = 'au';
  }
  sayHi() {
    return `${this.name}: Labas!`;
  }

  sayGoodBye(otherName = 'Petrai') {
    return `${this.name}: Iki ${otherName}!`;
  }
  // balsas(voice = 'Au au') {
  //   console.log(`${this.name}: ${voice}!`);
  // }
  voice() {
    const sound = `${this.sound} ${this.sound}`;
    return `${this.name}: ${this.firstLetterUp(sound)} !`;
  }

  capitalize(str) {
    //labas rytas -> Labas Rytas
    return str.split(' ').map(w => this.firstLetterUp(w)).join(' ');
  }
  firstLetterUp(str) {
    //labas rytas -> Labas rytas
    //return str.replace(str[0], str[0].toUpperCase());
    return str[0].toUpperCase() + str.slice(1);
  }

  changeVoice(sound) {
    this.sound = sound;
  }
  newBone() {
    return `${this.name}: ${'🦴'.repeat(++this.boneCount)}!`
  }
}

class Cat {
  constructor(name) {
    this.name = name;
    this.mouseCount = 0;
  }
  sayHi() {
    return `${this.name}: Labas!`;
  }
  sayGoodBye(otherName = 'Petrai') {
    return `${this.name}: Iki ${otherName}!`;
  }
  newMouse() {
    return `${this.name}: ${'🐁'.repeat(++this.mouseCount)}!`
  }
}


const rex = new Dog('Rex');
const spike = new Dog('Spike');
const brisius = new Dog('Brisius');
console.log(rex);
console.log(spike);
console.log(brisius);

console.log(rex.sayHi());
console.log(spike.sayHi());
console.log(brisius.sayHi());

console.log(rex.sayGoodBye('Maryte'));
console.log(spike.sayGoodBye('Jonai'));
console.log(brisius.sayGoodBye('Ona'));

//Sunys: Au au!
// rex.balsas();
// spike.balsas();
// brisius.balsas();

console.log(rex.voice());
console.log(rex.newBone());   // Rex: 🦴!
console.log(rex.newBone());   // Rex: 🦴🦴!
console.log(rex.newBone());   // Rex: 🦴🦴🦴!
console.log(rex.newBone());   // Rex: 🦴🦴🦴🦴!


rex.changeVoice('bark');
console.log(rex.voice());     // Rex: Bark bark!



const rainis = new Cat('Rainis');
console.log(rainis);

console.log(rainis.sayHi());
console.log(rainis.sayGoodBye('Petrai'));

console.log(rainis.newMouse());      // Rainis: 🐁!
console.log(rainis.newMouse());      // Rainis: 🐁🐁!
console.log(rainis.newMouse());      // Rainis: 🐁🐁🐁!
console.log(rainis.newMouse());      // Rainis: 🐁🐁🐁🐁!