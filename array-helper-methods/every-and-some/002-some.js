var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
];

console.log(
  //if every computer than meet 16gb return true, eventually it will return true, else false

  computers.some( function ( computer )
  {
    return computer.ram > 16;
  } )

  // In this case as refered to computers array above
  // 24(true) || 4(false) || 32(true) ==> return true (at least return true, therefore return true eventually) 

);
