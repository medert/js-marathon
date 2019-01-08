// YOUR CODE GOES HERE
const { Spaceship } = require("./Spaceship.js");
const { CrewMember } = require("./CrewMember.js");
const { Rocket } = require("./Rocket.js");

let launchpad = (ship) => {
  console.log('Initiating preflight procedures!');
  console.log(`Welcome aboard the ${ship.name}!`);
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

let crewNames = ['Ben','John','Sam'];

let ourShip = new Spaceship('Thunder');

launchpad(ourShip);

let crew = trainCrew(crewNames);

ourShip.loadCrew(crew);

let captain = ourShip.captain().name;

console.log(`${captain} is the captain!`);

let rocket = new Rocket();

rocket.addFuel(2);
