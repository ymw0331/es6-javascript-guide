var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunPrograms = false;

// Classical method to check if every computer has more than 16 gb ram
for ( var i = 0; i < computers.length; i++ )
{
  var computer = computers[ i ];

  if ( computer.ram < 16 )
  {
    allComputersCanRunProgram = false;
  } else
  {
    onlySomeComputersCanRunPrograms = true;
  }
}

// console.log(
//   allComputersCanRunProgram
// );

// console.log(
//   onlySomeComputersCanRunPrograms
// );

console.log(
  //if every computer than meet 16gb return true, eventually it will return true, else false

  computers.every( function ( computer )
  {
    return computer.ram > 16;
  } )

  // In this case as refered to computers array above
  // 24(true) && 4(false) && 32(true) ==> return false 

);
