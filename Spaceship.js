class Spaceship {
  constructor(name){
    this.name = name;
    this.crew = [];
    this.propulsion = null;
  }

  captain(){
    let number = this.crew.length;
    let randomNumber = Math.floor(Math.random() * number);
    return this.crew[randomNumber];
  }

  loadCrew(arr){
    arr.forEach((item) =>{
      this.crew.push(item);
      console.log(`${item.name} is now aboard the Waverider.`);
    });
  }

  mountPropulsion(rocket){
    this.propulsion = rocket;
    console.log('Propultion is mounted!');
  }
  takeoff(){
    if (this.propulsion.fire()){
      console.log('RRRRRRRR-SHHHHHHHHHH')
    } else {
      console.log('Take off was unsuccessful')
    }
  }
}

module.exports = {
    Spaceship
};
