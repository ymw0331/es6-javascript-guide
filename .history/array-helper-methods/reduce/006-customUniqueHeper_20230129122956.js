// Hardmode: Custom 'Unique' Helper
// Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.

// For example, given the following array:
// var numbers = [1, 1, 2, 3, 4, 4];
// Your function should return
// [1, 2, 3, 4]
// Hint: Use the 'reduce' and 'find' helpers.  

function unique ( array )
{
  // iterate through array
  return array.reduce( function ( acc, number )
  {

    // check if number coming into array exists previously in the accumulator, and if so do nothing, if not add to accumulator
    acc.find( previousValue => number === previousValue ) ? acc : acc.push( number );

    return acc;
  }, [] );
}


// without comments
function unique ( array )
{
  return array.reduce( function ( acc, number )
  {
    acc.find( previousValue => number === previousValue ) ? acc : acc.push( number );
    return acc;
  }, [] );// iterate through array
  return array.reduce( function ( acc, number )
  {

    // check if number coming into array exists previously in the accumulator, and if so do nothing, if not add to accumulator
    acc.find( previousValue => number === previousValue ) ? acc : acc.push( number );

    return acc;
  }, [] );
}


// without comments
function unique ( array )
{
  return array.reduce( function ( acc, number )
  {
    acc.find( previousValue => number === previousValue ) ? acc : acc.push( number );
    return acc;
  }, [] );
}