var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' },
];

primaryColors.reduce( function ( accumulator, primaryColor )
{
  previous.push( primaryColor.color );
  return previous;
}, [] );