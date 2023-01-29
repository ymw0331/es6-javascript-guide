// Purpose of find helper, to search through an array and look for a particular element in the array

// filter() returns an array containing the element that satisfies the condition, but find() returns the element itself that satisfies the condition.
// In filter(), whole array is iterated despite the fact that the element being searched for is present at the beginning. But in find(), as soon as the element that satisfies the condition is found, it gets returned.

var users = [
  { name: "Jill" },
  { name: "Alex", id: 4 },
  { name: "Bill" },
  { name: "Alex" },
];

var user = users.find( function ( user )
{
  // No needed this way, trible equal is the boolean comparator
  // if ( user.name === 'Alex' )
  // {
  //   return true;
  // }
  return user.name === 'Alex';
} );

// Classical method
// for ( var i = 0; i < users.length; i++ )
// {
//   if ( users[ i ].name === 'Alex' )
//   {
//     user = users[ i ];
//     break;
//   }
// }

console.log(user)




