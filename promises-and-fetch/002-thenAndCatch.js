// Create a promise
promise = new Promise( ( resolve, reject ) =>
{
  reject();
} );

promise
  .then( () =>
    console.log( 'finally finished' )
  )
  .then( () =>
    console.log( 'i was alson ran!!' )
  ).catch( () => 'uh oh' );
