// Create an array of numbers
var numbers = [ 1, 2, 3, 4, 5 ];

// Create a variable to hold the sum
var sum = 0;

function adder ( number )
{
  sum += number;
}


// Loop over the array, incrementing the sum varibale
// Conventionally, array names is as in plural form, while inner iterator function, use singular form
numbers.forEach( adder );


// for ( let i = 0; i < numbers.length; i++ )
// {
//   sum = sum + numbers[ i ];
// }

// Print the sum variable
console.log( sum );
