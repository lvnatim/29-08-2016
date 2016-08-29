const fs = require('fs');
const dir = process.argv[2];
const fileExtension = "." + process.argv[3];

fs.readdir(dir, (err, filenames) => {
  if (err) throw err;
  filenames.forEach(line => {
    if (line.endsWith(fileExtension)){
      console.log(line);
    };
  });
});