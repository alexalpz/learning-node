// const counter = require('./myModule');
const {inc, dec, getCount}= require("./myModule");

//Incrementing count 3 times.
/*
counter.inc();
counter.inc();
counter.inc();
console.log(counter.getCount());
*/

inc();
inc();
inc();
dec();

console.log(getCount());