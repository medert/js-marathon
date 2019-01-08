// YOUR CODE GOES HERE
const { Spaceship } = require("./Spaceship.js");
const { CrewMember } = require("./CrewMember.js");
const { Rocket } = require("./Rocket.js");


let crewNames = ['Ben','John','Sam'];

let ourShip = new Spaceship('Thunder');

let launchpad = (ship) => {
  console.log('Initiating preflight procedures!');
  console.log(`Welcome aboard the ${ship.name}!\n`);
  let crew = trainCrew(crewNames);
  ship.loadCrew(crew);
  let captain_name = ship.captain().name;
  console.log(`${captain_name} is the captain!`);
  let rocket = new Rocket();
  rocket.addFuel(2);
  rocket.fire();
  ship.mountPropulsion();
};


let trainCrew = (arr) => {
  let list = [];
  arr.forEach((member) =>{
    let crewMember  = new CrewMember(member);
    crewMember.trained = true;
    list.push(crewMember);
  });
  return list;
};

launchpad(ourShip);



// let rocket = new Rocket();
//
// rocket.addFuel(2);
//
// rocket = launchpad(rocket);
