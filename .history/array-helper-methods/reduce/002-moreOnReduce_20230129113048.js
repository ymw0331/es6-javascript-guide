var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' },
];

primaryColors.reduce( function ( accumulator, primaryColor )
{
  accumulator.push( primaryColor.color );
  return previous;
}, [] );