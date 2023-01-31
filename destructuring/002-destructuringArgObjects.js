var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};

// ES5
// function fileSummary ( file )
// {
//   return `The file ${ file.name }.${ file.extension } is of size ${ file.size }`;
// }

// ES6
// destructure arg objects with property names
function fileSummary ( { name, extension, size }, { color } )
{
  return `The ${ color } file ${ name }.${ extension } is of size ${ size }`;
}


console.log(
  fileSummary( savedFile, { color: 'red' } )
);