// const companies = [
//   { name: "Google", location: "Mountain View" },
//   { name: "Facebook", location: "Menlo Park" },
//   { name: "Uber", location: "San Frncisco" },
// ];

// // ES5
// // var locationES5 = companies[ 0 ].location;
// // console.log( locationES5 );

// // ES6
// // const [ location ] = companies; //returns entire object
// // to access the location object, further destructure it
// const [ { location } ] = companies;
// console.log( location );

const Google = {
  locations: [ "Mountain View", "New York", "London" ]
};

const { locations: locations } = Google;
//look for locations prop and pull out first element
const { locations: [ location ] } = Google;
console.log( "locations ==>", locations );
console.log( "location ==>", location );