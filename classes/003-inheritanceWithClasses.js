// ES6 solution for inheritance, using classes
class Car
{
  constructor ( { title } )//initilization or set up
  {
    this.title = title;
  }
  // add method, use enhanced function literal syntax
  drive ()
  {
    return 'vroom';
  }
}

class Toyota extends Car
{
  constructor ( options )
  {
    super( options ); //Car.constructor()
    this.color = options.color;
  }

  honk ()
  { return 'beep'; }
}


// const car = new Car( { title: "Toyota" } ); //create instance of car
// console.log( car );
// console.log( car.drive() );
// console.log( '--------------' );

const toyota = new Toyota( { color: 'red', title: "Daily Driver" } );
console.log( toyota.honk() );
console.log( toyota.drive() );
console.log( toyota );