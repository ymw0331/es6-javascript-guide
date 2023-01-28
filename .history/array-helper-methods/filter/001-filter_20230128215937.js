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

products.filter(function(product){
  return product.type === 'fruit'
})



console.log( filteredProducts );