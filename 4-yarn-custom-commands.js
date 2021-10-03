const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// commands --> add, remove, read, list

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: "string"
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: "string"
        },
        created_date: {
            describe: 'Created Timestamp',
            demandOption: true,
            type:"number"
        }
    },
    handler: (args) => {
        console.log('Title: ' + args.title);
        console.log('Body: ' + args.body);
        console.log('Created_date: ' + args.created_date);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('Removing the note...');
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => {
        console.log('Reading note...');
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: ' List the notes',
    handler: () => {
        console.log('Listing the notes...');
    }
});
yargs.parse();
// console.log(yargs.argv);

//WITHOUT YARGS
//pass arguments when running using "node app.js args"
// const command = process.argv[2];
// console.log(process.argv);
// if(command === 'add'){
//     console.log('Adding note!');
// }
// else if(command === 'remove'){
//     console.log('Removing a note!');
// }