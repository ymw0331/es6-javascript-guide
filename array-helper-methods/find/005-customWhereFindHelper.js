// Really Challenging: Custom findWhere Helper
// This is a tough one!  The most common find operation is to an object that has a given property.  Rather than writing out a full function every time, it would be great if we has a shorthand syntax to find an object like this:
// findWhere(ladders, { height: '20 feet' });
// The object { ladders: '20 feet' } should be used as the search criteria - we would want to find a ladder whose 'height' property was '20 feet';


// Your goal: Write a 'findWhere' function that achieves this shorthand approach.  'findWhere' should return the found object.

// In summary:

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];


// Hint: the hard part of this is figuring out the name of the proeprty on the criteria.  You can use Object.keys(criteria)[0] to figure out the name of the property on the object.  For example, Object.keys({ height: '20 feet' }) would return 'height'.  You could then check to see if a given element in the array had a property equal to the criteria's value with something like element[property] === criteria[property].


function findWhere ( array, criteria )
{
  let property = Object.keys( criteria )[ 0 ];

  return array.find( ( element ) =>
    element[ property ] === criteria[ property ]
   );
}


console.log( findWhere( ladders, { height: 25 } ) );

// result: { id:3, height: 25 }
