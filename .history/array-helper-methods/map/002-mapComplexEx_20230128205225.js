var cars = [
  { model: "Buick", price: "CHEAP" },
  { model: "Camero", price: "EXPENSIVE" }
];

// common operation takes with arrays of object, refer as plucking of each object in the array
var prices = cars.map( function ( car )
{
  return car.price;
} );

console.log( prices );