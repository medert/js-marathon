class Rocket {
  constructor(fuel){
    this.fuel = fuel || 0;
  }

  addFuel(fuel){
    this.fuel += fuel;
    console.log(`Fuel level is ${this.fuel}`)
  }
}

module.exports = {
    Rocket
};
