const chalk =require('chalk');
const notes = require('./notes.js');
const myUtil = require('./utils');

const msg =notes.getNotes();
console.log(msg);

const sum = myUtil.add(10,15);
console.log(sum);

const greenMsg = chalk.green.inverse.bold('Success!');
console.log(greenMsg);

console.log(process.argv);

// const myUtil = require('./utils');

// console.log(myUtil.name);
// console.log(sum);
