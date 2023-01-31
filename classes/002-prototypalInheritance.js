// ES5 inheritance
function Car ( options )
{
  this.title = options.title;
}

Car.prototype.drive = function ()
{
  return 'vroom';
};

function Toyota ( options )
{
  Car.call( this, options );
  this.color = options.color;
}

Toyota.prototype = Object.create( Car.prototype );
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function ()
{
  return 'beep';
};

const car = new Car( { title: "Focus" } );
const toyota = new Toyota( { color: 'red', title: 'Daily Driver' } );

// console.log( car );
// console.log( car.drive() );

console.log( toyota );
console.log( toyota.drive() );
console.log( toyota.honk() );