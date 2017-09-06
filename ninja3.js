/*  ninja3.js
    leif anderson 9/6/17
*/

class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = 3;
    this.speed = 3;
  }
  drinkSake() {
    this.strength += 10;
  }
  punch(ninja) {
    ninja.health -= 5;
    console.log(`${this.name} punched ${ninja.name} for 5 damage!`);
  }
  sayName() {
    console.log(`My name is ${this.name}!`);
  }
  showStats() {
    console.log(`Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`);
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    super.strength = 10;
    super.speed = 10;
    this.wisdom = 10;
  }
  speakWisdom() {
    super.drinkSake();
    console.log("I'm tired of whiney Ninja's asking questions about Javascript!");
  }
}

ninja_leif = new Ninja("Mr. Anderson");
ninja_char = new Ninja("Char Char Binks");
ninja_leif.showStats();
ninja_leif.drinkSake();
ninja_leif.showStats();
ninja_leif.punch(ninja_char);
sensei_cody = new Sensei("Codysseus");
sensei_cody.speakWisdom();
sensei_cody.showStats();
