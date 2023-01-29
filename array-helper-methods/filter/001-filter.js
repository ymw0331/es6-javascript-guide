// filter() returns an array containing the element that satisfies the condition, but find() returns the element itself that satisfies the condition.
// In filter(), whole array is iterated despite the fact that the element being searched for is present at the beginning. But in find(), as soon as the element that satisfies the condition is found, it gets returned.


var products = [
  { name: "cucumber", type: "vegetable" },
  { name: "banana", type: "fruit" },
  { name: "celery", type: "vegetable" },
  { name: "orange", type: "fruit" },
];

var filteredProducts = []; //produce a new subset of data we have for fruit

// for loop imp
// for ( var i = 0; i < products.length; i++ )
// {
//   if ( products[ i ].type === 'fruit' )
//   {
//     filteredProducts.push( products[ i ] );
//   }
// }



console.log( products.filter( function ( product )
{
  return ( product.type === 'vegetable' );
} )
);