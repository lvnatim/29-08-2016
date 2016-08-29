const fs = require('fs');
const filename = process.argv[2];
const fileContents = fs.readFileSync(filename, 'utf-8').trim();
const lines = fileContents.split('\n')
console.log(lines.length - 1);