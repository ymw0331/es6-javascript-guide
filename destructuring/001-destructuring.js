var expense = {
  type: "Business",
  amount: '$45 USD',
};

// ES5 way of accessing props
// var type = expense.type;
// var amount = expense.amount;

// ES6 destructuring
const { type, amount } = expense;
// not creating object, instead declaring new variable as type and amount, and referenced it to expect.type and expect.amount prop

// names of declared variables have to matched/identical with the property name that try to copied off

console.log( 'type ==>', type );
console.log( 'amount ==>', amount );