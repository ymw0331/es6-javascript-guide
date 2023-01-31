function* colors ()
{
  yield 'red';
  yield 'blue';
  yield 'green';
}

const gen = colors();
// console.log( gen.next() );
// console.log( gen.next() );
// console.log( gen.next() );
// console.log( gen.next() );

// generator work perfectly with forOfLoop
const myColors = [];
for ( let color of colors() )
{
  myColors.push( color );
}

console.log( myColors );