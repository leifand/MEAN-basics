/*  ninja1.js
    leif anderson 9/6/17
*/

function Ninja(name) {
  this.name = name;
  this.health = 100;
  speed = 3;
  strength = 3;
}

Ninja.prototype.sayName = function() {
  console.log(this.name);
}

Ninja.prototype.showStats = function() {
  console.log('Health: ' + this.health);
  console.log('Strength: ' + strength);
  console.log('Speed: ' + speed);
}

Ninja.prototype.drinkSake = function() {
  strength += 10;
}


ninja_blaze = new Ninja('Blaze Amaze');
console.log(ninja_blaze);
ninja_blaze.sayName();
ninja_blaze.showStats();
ninja_blaze.drinkSake();
ninja_blaze.showStats();
