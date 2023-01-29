// Given a string that contains some numbers of parathesis, are these expression balanced
// "()()()()"
// "(((())))"
// "))))"
// "()))))"
// ")()("

// Counter initialized as 0, if there is openning parens '(', increment it by 1, while closing parens ')', then at very end after entire reduce run, if we have counter > 1, means parens is inbalance


// "()()" ==> +1 -1 +1 -1 ==> 0  balanced
// "(()" ==> +1 +1 -1 ==> 1 inbalanced

// function balanceParens ( string )
// {
//   return string.split( "" ).reduce( function ( accumulator, singleParenthesis )
//   {
//     if ( singleParenthesis === "(" ) { return ++accumulator; }
//     if ( singleParenthesis === ")" ) { return --accumulator; }

//     return accumulator;
//   }, 0 );
// }
 ''
function balanceParens ( string )
{
  return !string.split( "" ).reduce( function ( accumulator, singleParenthesis )
  {
    if ( singleParenthesis === "(" ) { return ++accumulator; }
    if ( singleParenthesis === ")" ) { return --accumulator; }

    return accumulator;
  }, 0 );
}

console.log(
  balanceParens( "()" )
);

