var numbers = [ 1, 2, 3 ];
var doubledNumbers = [];
//create a new array for doubleNumbers, because in comple JS app, we want to avoid mutating or changing data wherever possible

// for ( var i = 0; i < numbers.length; i++ )
// {
//   doubledNumbers.push( numbers[ i ] * 2 );
// }

var doubled = numbers.map( function ( number )
{
  return number * 2;
} );

console.log(
  doubled
);