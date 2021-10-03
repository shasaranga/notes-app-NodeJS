const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// commands --> add, remove, read, list

// run commands --> example
// node app.js add --title="HELLO" --body="YY" --created_date=221321
// node app.js list

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
        notes.addNote(args.title,args.body,args.created_date);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
      title:{
          describe: 'Title of the particular note',
          demandOption: true,
          type:"string"
      }
    },
    handler: (args) => {
        console.log("Title received : " + args.title);
        notes.removeNote(args.title);
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: 'Title of the particular note',
            type:"string",
            demandOption: true
        }
    },
    handler: (args) => {
        console.log('Reading note...');
        notes.readNote(args.title);
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: ' List the notes',
    handler: () => {
        notes.listNotes();
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