var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' },
];

let reduceFunctionOutput = primaryColors.reduce( function ( accumulator, primaryColor )
{
  accumulator.push( primaryColor.color );
  return accumulator;
}, [] );

console.log( reduceFunctionOutput )


