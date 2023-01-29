// ES5
// function createBookShop ( inventory )
// {
//   return {
//     inventory: inventory,
//     inventoryValue: function ()
//     {
//       return this.inventory.reduce( ( total, book ) => total + book.price, 0 );
//     },
//     priceForTitle: function ()
//     {
//       return this.inventory.find( book => book.title === title ).price;
//     }
//   };
// }

// const inventory = [
//   { title: 'Harry Potter', price: 10 },
//   { title: 'Eloquent Javascript', price: 15 }
// ];

// const bookShop = createBookShop( inventory );

// bookShop.inventoryValue();
// bookShop.price( "Harry Potter" );


// ES6
function createBookShop ( inventory )
{
  return {
    inventory,
    inventoryValue ()
    {
      return this.inventory.reduce( ( total, book ) => total + book.price, 0 );
    },
    priceForTitle: function ()
    {
      return this.inventory.find( book => book.title === title ).price;
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 }
];

const bookShop = createBookShop( inventory );

