
// Filtering Values
// Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.  Don't forget to use the 'return' keyword in the functio

var numbers = [ 15, 25, 35, 45, 55, 65, 75, 85, 95 ];

var filteredNumbers = [];

filteredNumbers.push(

  numbers.filter( function ( number )
  {
    return number > 50;
  } )
);


console.log( filteredNumbers );