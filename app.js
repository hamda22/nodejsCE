const Hero = require("./new");
const math = require("./math");
const { add, subtract, multipy } = math;
console.log(Hero.getName());
Hero.setName("batman");
console.log(Hero.getName());

const HeroTwo = require("./new");
HeroTwo.setName("hhhh");
console.log(HeroTwo.getName());
console.log(add(5, 6));
console.log(subtract(5, 6));
console.log(multipy(5, 6));
// console.log((5, 6));
