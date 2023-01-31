const testingTeam = {
  lead: "Amanda",
  tester: "Bill"
};

const enginneringTeam = {
  testingTeam,
  size: 3,
  department: "Engineering",
  lead: "Jill",
  mananger: "Alex",
  engineer: "Dave",
};


// Create a multi step generator that access only the employee names in the engineeringTeam, instead of size and dept

function* EngineeringTeamIterator ( team )
{
  yield team.lead;
  yield team.mananger;
  yield team.engineer;
  // add the testing team
  const testingTeamGenerator = TestingTeamIterator( team.testingTeam );
  // generator delegation
  yield* testingTeamGenerator;
}

function* TestingTeamIterator ( team )
{
  yield team.lead;
  yield team.tester;
}


const names = [];
for ( let name of EngineeringTeamIterator( enginneringTeam ) )
{
  names.push( name );
}


console.log( names ); 