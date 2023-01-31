const companies = [
  'Google', 'Facebook', 'Uber'
];

// destructing objects ==> pulling off of properties
// destructing array ==> pulling off of individual elements

// Old approach
const firstCompany = companies[ 0 ];
const secondCompany = companies[ 1 ];
const thirdCompany = companies[ 2 ];

// New approach (ES6)
// To access individual element use array
const [ name, name2, name3, name4 ] = companies;

// To destructure a property use curly brace
const { length } = companies;


// console.log( firstCompany );
console.log( name );
console.log( length );


// mix with rest operator
const [ compName, compName2, ...rest ] = companies;
console.log( compName, compName2, ...rest );