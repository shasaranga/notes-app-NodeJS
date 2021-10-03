const fs = require('fs');
const chalk = require('chalk');

const getNotes = ()=>{
    return "Your notes...";
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJsonString =dataBuffer.toString();
        return JSON.parse(dataJsonString);

    }catch (e) {
        console.log("Loading Note Error : " + e);
        return [];
    }
}

const addNote = (title, body, createdDate)=>{
    const notes = loadNotes();
    console.log("No. of Notes Loaded : " + notes.length );
    const duplicateNote = notes.find(note =>note.title === title );

    debugger

    if(!duplicateNote){
        notes.push({
            "title": title,
            "body": body,
            "createdDate": createdDate
        });
        console.log(notes);

        saveNotes(notes);
        console.log(chalk.green.inverse.bold("New Note Added."));
    }else{
        console.log(chalk.red.inverse.bold("Note title taken!"));
    }

}

const saveNotes = (notes)=>{
    const dataJsonString = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJsonString);
}

const removeNote = (title)=>{
    const availableNotes = loadNotes();
    let updatedList = availableNotes.filter((note) => note.title !== title);
    if(updatedList.length < availableNotes.length){
        saveNotes(updatedList);
        console.log(chalk.green.inverse.bold('Successfully removed!'));
    }
    else{
        console.log(chalk.red.inverse.bold('No Note Found!'));
    }

}

const listNotes = ()=>{
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'));

    notes.forEach((note) => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);

    if(note){
        console.log(chalk.blueBright.inverse(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.red.inverse.bold('No Note Found!'));
    }
}

module.exports = {
    getNotesFunction: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};