const validator = require('validator');
const notes = require('./notes.js');

console.log(notes.getNotes());
console.log(validator.isEmail('s.hasaranga@gmail.com'));

// const myUtil = require('./utils');
// const sum = myUtil.add(10,15);
// console.log(myUtil.name);
// console.log(sum);
