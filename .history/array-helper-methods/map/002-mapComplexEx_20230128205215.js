var cars = [
  { model: "Buick", price: "CHEAP" },
  { model: "Camero", price: "EXPENSIVE" }
];

// common operation takes with arrays of object, refer as plucking
var prices = cars.map( function ( car )
{
  return car.price;
} );

console.log( prices );