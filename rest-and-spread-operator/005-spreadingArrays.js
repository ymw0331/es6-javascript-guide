// Spreadin' Arrays
// Refactor the following to use the spread operator.

// function join ( array1, array2 )
// {
//   return array1.concat( array2 );
// }

function join ( array1, array2 )
{
  return [ ...array1, ...array2 ];
};

let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];

console.log(
  join( array1, array2)
);