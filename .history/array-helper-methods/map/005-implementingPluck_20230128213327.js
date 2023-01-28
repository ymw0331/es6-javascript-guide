// Really Hard - Implementing 'Pluck'
// This is a hard one!
// Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object. 

// Example: 

var paints = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'yellow' }
];
// pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];

// Hint:

// Remember that you can access a property on an object by using square bracket notation. For example...

// var person = { name: 'Bill' };
// person['name'] // returns 'Bill'

function pluck ( array, property )
{
  array.map( function ( element )
  {
    return element[ property ];
  } );
}

console.log(
  pluck( paints, property)
);
