class Rocket {
  constructor(fuel){
    this.fuel = fuel || 0;
  }

  addFuel(fuel){
    this.fuel += fuel;
    console.log(`Current fuel amount is ${this.fuel}`)
  }

  fire(){
    if (this.fuel > 0){
      this.fuel--;
      console.log('Engines have been fired!');
      console.log(`Fuel amount is ${this.fuel}`);
      return true;
    } else {
      console.log("Engines have failed to fire!");
      return false;
    }
  }
}

module.exports = {
    Rocket
};
