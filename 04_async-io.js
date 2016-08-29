const fs = require("fs");
const file = fs.readFile(process.argv[2], (err, data) => {
  if (err) throw err;
  const lines = data
    .toString()
    .split('\n')
    .length - 1;
  console.log(lines);
});