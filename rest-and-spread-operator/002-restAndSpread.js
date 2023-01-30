// Rest ==> gather to gather variables
// Spread ==> flatten and spread out

const defaultColors = [ 'red', 'green' ];
const userFavoriteColors = [ 'orange', 'yellow' ];
const fallColors = [ 'fire red', 'fall orange' ];

// console.log(
//   defaultColors.concat( userFavoriteColors )
// );
// [ 'red', 'green', 'orange', 'yellow' ]

// achieve same effect as such

console.log(
  [ 'blue', 'green', ...fallColors, ...defaultColors, ...userFavoriteColors ]
);
// take all of the elements inside of defaultColors array, pull it out/flatten 
// another advantage of using spread operator is to add new elements in front of it

// rest operator normally pass as parameter/arg of other
// ...items ==> capture all items in shopping list
function validateShoppingList ( ...items )
{
  if ( items.indexOf( 'milk' ) < 0 )
  {
    return [ 'milk', ...items ];
  }

  return items;

}

console.log(
  validateShoppingList( 'oranges', 'bread', 'eggs' )
)



