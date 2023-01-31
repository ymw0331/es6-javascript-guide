// Practical use case of destructuring on arrays
const points = [
  [ 4, 5 ],
  [ 10, 1 ],
  [ 0, 40 ]
];

// we have a array of arrays, that need to be transformed as below
// [
//   { x: 3, y: 5 },
//   { x: 10, y: 1 },
//   { x: 0, y: 40 },
// ];

console.log(
  points.map( ( [ x, y ] ) =>
  {
    // const [ x, y ] = pair; //can be straight destructured at arg
    return { x, y };

  } )
);





