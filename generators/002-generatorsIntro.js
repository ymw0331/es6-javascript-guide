// Generator is a function that can be entered and exited multiple times
// Normally we call a function, function will run it and return some value
// With generators, we can run some code, return the value and go right back into the function at the same place where we lefted

function* shopping ()
{
  // stuff at the sidewalk

  // walking down the sidewalk

  // go into the store with cash

  const stuffFromStore = yield 'cash'; // new keyword added with ES6
  const cleanClothes = yield 'laundry';
  //yield can be called multiple times
  // walking back home
  return [ stuffFromStore, cleanClothes ];

}

// stuff in the store
const gen = shopping();

console.log(
  gen.next() //leaving our house, code started to be exe
);

// walked into the store
// walking up and down the aisles...
// purchawse our stuff
console.log(
  gen.next( 'groceries' ) //leaving the store with groceries
);

console.log(
  gen.next( 'clean clothes' )
);