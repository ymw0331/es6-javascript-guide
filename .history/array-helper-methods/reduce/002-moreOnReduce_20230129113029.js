var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' },
];

primaryColors.reduce( function ( previous, primaryColor )
{

  previous.push( primaryColor.color );

}, [] );