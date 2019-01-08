class Spaceship {
  constructor(name){
    this.name = name;
    this.crew = [];
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
}

module.exports = {
    Spaceship
};
