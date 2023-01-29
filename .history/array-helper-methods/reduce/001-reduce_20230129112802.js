var numbers = [ 10, 20, 30 ];
var sum = 0;

// Classical method
for ( var i = 0; i < numbers.length; i++ )
{
  sum += numbers[ i ];
}

console.log( sum );


let reduceFunctionSum = 
numbers.reduce( function ( sum, number )
{
  return sum + number;
}, 0 ); //initial value