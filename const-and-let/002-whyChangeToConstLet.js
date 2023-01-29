function count ( targetString )
{
  const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
  let number = 0;

  for ( var i = 0; i < targetString.length; i++ )
  {
    if ( vowels.includes( targetString[ i ] ) )
    {
      number++;
    }
  }
  return number;

}

console.log(
  count( 'sjkdfhwuyerpqwirepokl;vmkjlkhjfasdf' )
);