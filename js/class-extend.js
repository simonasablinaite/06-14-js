// bendrines klases kurimas:

class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.sound = 'au miau';
  }

  sayHi() {
    return `Hi, my name is ${this.name} and my color is ${this.color}.`;
  }
  voice() {
    if (!this.sound) {
      return `${this.name}: nor in a mood to talk...`;
    }
    return `${this.name}: ${this.sound}!`;
  }
}

const gyvunas = new Pet('Rezusas', 'raudonas');
console.log(gyvunas);
console.log(gyvunas.sayHi());

class Dog extends Pet {
  constructor(name, color) {
    super(name, color);
    this.sound = 'Au au'
  }

}

class Cat extends Pet {
  constructor(catName, catColor, lives) {
    super(catName, catColor);
    this.lives = lives;
    this.sound = 'Miai miau';
  }

}

const rex = new Dog('Rex', 'black');
const sniegius = new Cat('Sniegius', 'white', 8);

console.log(rex);
console.log(sniegius);

console.log(rex.voice());
console.log(sniegius.voice());