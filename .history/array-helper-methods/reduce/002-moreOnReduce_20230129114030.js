var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' },
];

// accumulator can be acc or previous
let reduceFunctionOutput = primaryColors.reduce( function ( accumulator, primaryColor )
{
  accumulator.push( primaryColor.color );
  return accumulator;
}, [] );

console.log( reduceFunctionOutput )


