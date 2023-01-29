// Classical default arg
// function makeAjaxRequest ( url, method )
// {
//   if ( !method )
//   {
//     method = "GET";
//   }
//   // logic to make request
// }

// ES6 default arg
function makeAjaxRequest ( url, method = "GET" )
{
  return method;
  // logic to make request
}

console.log(
  makeAjaxRequest( 'google.com', undefined )
);

console.log(
  makeAjaxRequest( 'google.com', 'GET' )
);