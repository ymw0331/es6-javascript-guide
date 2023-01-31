// Promise and Fetch
// ES6 brings 100% native impl of promise

// 3 states of promises
// 'unresolved' ==> waiting for something to finish
// 'resolved' ==> something finished and it all went ok
// 'rejected' ==> something finished and something went bad

// promise (Everthing work out) ==> 'resolved' status ==> then callback
// promise (Something bad happened) ==> 'rejected' status ==> catch callback


// Create a promise
promise = new Promise( ( resolve, reject ) =>
{
  reject();
} );
