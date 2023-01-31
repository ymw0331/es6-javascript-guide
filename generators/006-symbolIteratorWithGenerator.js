// Symbol iterator is a tool that teaches the object how to respond to the forOfLoop

const testingTeam = {
  lead: "Amanda",
  tester: "Bill",
  // purpose of symbol iterator is to teach forOfLoop how should iterate the object
  [ Symbol.iterator ]: function* ()
  {
    yield this.lead;
    yield this.tester;
  }
};

const enginneringTeam = {
  testingTeam,
  size: 3,
  department: "Engineering",
  lead: "Jill",
  manager: "Alex",
  engineer: "Dave",
  [ Symbol.iterator ]: function* ()
  {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};


// Create a multi step generator that access only the employee names in the engineeringTeam, instead of size and dept

// function* EngineeringTeamIterator ( team )
// {
//   yield team.lead;
//   yield team.mananger;
//   yield team.engineer;
//   // symbol iterator
//   yield* team.testingTeam; //iterate over testing team
// }


const names = [];
for ( let name of enginneringTeam )
{
  names.push( name );
}

console.log( names ); 