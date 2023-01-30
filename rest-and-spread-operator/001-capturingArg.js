// function addNumbers ( numbers )
// {
//   return numbers.reduce( ( sum, number ) =>
//   {
//     return sum + number;
//   }, 0 );
// }

// console.log(
//   addNumbers( [ 1, 2, 3, 4, 5 ] )
// );

// (gather together variables) rest operator ==> ...numbers, it accept as some unknown number of arguments
function addNumbers ( ...numbers ) 
{
  return numbers.reduce( ( sum, number ) =>
  {
    return sum + number;
  }, 0 );
}

console.log(
  addNumbers( 1, 2, 3, 4, 5, 6, 7, 10 )
);