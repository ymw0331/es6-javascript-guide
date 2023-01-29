var color = 'red';

console.log(
  color
);

// const is a keyword used to declare variable where we expect the value assigning to it will never change

// let is used to declare variables when we expect the valud of the variable to change over time

var name = "Jane";
var title = "Software Engineer";
var hourlyWage = 40;

// ES6
const name = "Jane"; //name is not likely to change
let title = "Software Engineer"; //let is replacement to var, direct contrast to const
// name = "Janet"; //will prompt error
let hourlyWage = 40;

// some time later....
title = "Senior Software Engineer";
hourlyWage = 45;