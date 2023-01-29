function saveFile ()
{
  // $.ajax( { method: "POST", url: url, data: data } );
  // if there is a same key and value, just put as same word
  $.ajax( {
    url,
    data,
    method: "POST"
  } );

}

const url = "http://fileupload.com";
const data = { color: 'red' };

console.log(
  saveFile( url, data )
);