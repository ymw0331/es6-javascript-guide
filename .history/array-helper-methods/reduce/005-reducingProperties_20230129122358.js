// Reducing Properties
// Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  
// The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
// Hint: Don't forget to return the accumulator object (the first argument to the iterator function)


var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];



var deskTypes = desks.reduce( function ( { sitting, standing }, desk )
{

  if ( desk.type === 'sitting' )
  {
    return ++sitting;
  }
  xif ( desk.type === 'standing' )
  {
    return --standing;
  }

  return { sitting, standing };

}, { sitting: 0, standing: 0 } );




// var deskTypes = desks.reduce(function({sitting, standing}, desks) {
//   if(desks.type === 'sitting') (sitting++);
//   if(desks.type === 'standing') (standing++);
// return {sitting, standing};
// }, { sitting: 0, standing: 0 });


console.log( deskTypes );