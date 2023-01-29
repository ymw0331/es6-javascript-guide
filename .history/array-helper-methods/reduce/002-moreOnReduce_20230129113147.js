var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' },
];

// accummu
let reduceFunctionOutput = primaryColors.reduce( function ( accumulator, primaryColor )
{
  accumulator.push( primaryColor.color );
  return accumulator;
}, [] );

console.log( reduceFunctionOutput )


