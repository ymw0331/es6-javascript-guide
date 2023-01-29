function Field ( value )
{
  this.value = value;
}

Field.prototype.validate = function ()
{
  return this.value.length > 0;
};

var username = new Field( "2cool" );
var password = new Field( "my_password" );
var birthdate = new Field( "10/20/2022" );

// console.log(
//   username.validate() && password.validate() && birthdate.validate()
// );


var fileds = [ username, password, birthdate ];

// using every helper, help us avoid using .validate() multiple times
var formIsValid = fileds.every( function ( field )
{
  return field.validate();
}
);


if ( formIsValid )
{
  // allow user to submit!
} else
{
  // show an error message
}


console.log( formIsValid );