var products = [
  { name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
  { name: "banana", type: "fruit", quantity: 10, price: 15 },
  { name: "celery", type: "vegetable", quantity: 30, price: 13 },
  { name: "orange", type: "fruit", quantity: 3, price: 5 },
];

// type is 'vegetable', quantity is greater than 0, price is less than 10

console.log( products.filter( function ( product )
{
  return product.type === 'vegetable'
    && product.quantity > 0
    && product.price < 10;
} ) )

