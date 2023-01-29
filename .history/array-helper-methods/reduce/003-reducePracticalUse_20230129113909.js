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

// counter initialized as 0, if there is openning parens '(', increment it by 1, while closing parens ')', then at very end after entire reduce run, if we have counter > 1, means parens is inbalance


// "()()" ==> +1 -1 +1 -1 +