// Let say we have a function with long list of parameter

function signup ( { username, password, email, dateOfBirth, city } )
{
  // create new user


}

// other code
// other code
// other code
// other code
// other code


// if we calling this signup function else where and we need to remember arg to pass, this is lengthy
signup( 'myname', 'mypassword', 'myemail@gmail.com', '1/1/1990', 'New York' );

// instead of passing list strings, we can pass an object that contains diff properties 
const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'myemail@gmail.com',
  dateOfBirth: '1/1/1990',
  city: 'New York'
};


console.log(
  signup( user )
);