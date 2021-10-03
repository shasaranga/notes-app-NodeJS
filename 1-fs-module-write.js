const fs = require('fs');

// writing to the same file  (over-writing)
fs.writeFileSync('notes.txt', 'This file was created by Node.js.');

// writing to the same file while appending using appendFileSync()
fs.appendFileSync('notes.txt', ' This is appended using appendFileSync.');

// writing to the same file while appending using the writeFileSync
fs.writeFileSync('notes.txt', ' This is appended using writeFileSync.', { flag: 'a' });