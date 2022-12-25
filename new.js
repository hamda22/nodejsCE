class SuperHero {
  constructor(a) {
    this.a = a;
  }
  getName() {
    return this.a;
  }
  setName(a) {
    this.a = a;
  }
}
module.exports = new SuperHero("HEYA");
