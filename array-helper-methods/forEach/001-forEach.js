var colors = [ 'red', 'blue', 'green' ];

// Classical for loop (need to move away from)
for ( var i = 0; i < colors.length; i++ )
{
  console.log( colors[ i ] );
}

// Help with iteration of an array, less code to be written
colors.forEach( function ( color )
{
  console.log( color );
} );