const MathLibrary = {
  // wrong written, as it suppose to be multiply, we write the real function below instead of changing it otherwise other program that depends on the library might broke

  //...rest/spread operator,used to handle pass trough of arg to diff functions 
  calculateProduct ( ...rest )
  {
    console.log( "Please use the multiply approach instead" );
    // return a * b;
    return this.multiply( ...rest );
  },

  multiply ( a, b )
  {
    return ( a * b );
  }
};

