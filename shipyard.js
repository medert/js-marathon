// YOUR CODE GOES HERE
const { Spaceship } = require("./Spaceship.js");
const { CrewMember } = require("./CrewMember.js");
const { Rocket } = require("./Rocket.js");


let crewNames = ['Ben','John','Sam'];

let ourShip = new Spaceship('Thunder');

let rocket = new Rocket();

let launchpad = (spaceship,rocket,crew) => {
  console.log('Initiating preflight procedures!');
  console.log(`Welcome aboard the ${spaceship.name}!\n`);

  let trainedCrew = trainCrew(crew);
  spaceship.loadCrew(trainedCrew);
  let captain_name = spaceship.captain().name;
  console.log(`\n${captain_name} is the captain!\n`);
  rocket.addFuel(1);
  spaceship.mountPropulsion(rocket);
  spaceship.takeoff();
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

launchpad(ourShip, rocket, crewNames);
