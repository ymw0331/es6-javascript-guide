const enginneringTeam = {
  size: 3,
  department: "Engineering",
  lead: "Jill",
  mananger: "Alex",
  engineer: "Dave"
};


// Create a multi step generator that access only the employee names in the engineeringTeam, instead of size and dept

function* TeamIterator ( team )
{
  yield team.lead;
  yield team.mananger;
  yield team.engineer;
}

const names = [];
for ( let name of TeamIterator( enginneringTeam ) )
{
  names.push( name );
}

console.log( names ); 