// ForOfLoop in tree DS
class Comment
{
  constructor ( content, children )
  {
    this.content = content;
    this.children = children;
  };

  *[ Symbol.iterator ] ()
  {
    yield this.content;
    // array helpers like map and forEach do not help with generators
    for ( let child of this.children )
    {
      yield* child;
    }
  }
}

const children = [
  new Comment( 'good comment', [] ),
  new Comment( 'bad comment', [] ),
  new Comment( 'meh', [] )
];

const tree = new Comment( 'Great post!', children );

const values = [];

for ( let value of tree )
{
  values.push( value );
}

console.log( values );