// Given a string that contains some numbers of parathesis, are these expression balanced
// "()()()()"
// "(((())))"
// "))))"
// "()))))"
// ")()("

function balanceParens ( string )
{
  return string.split( "" ).reduce( function ( previous, singleParenthesis )
  {


  }, 0 );
}

console.log(
  balanceParens( "((((" )
);

