// Inheritance
// JS doesnt have true object inheritance, instead it has Prototype inheritance 

// ES6 solution to prototype inheritance
function Car ( options )
{
  this.title = options.title;
}

Car.prototype.drive = function ()
{
  return 'vroom';
};

const car = new Car( { title: "Focus" } );
 
console.log( car );