const MODULE = require('./06_module');
const dir = process.argv[2]
const fileExt = process.argv[3]
MODULE(dir, fileExt, (err, data)=>{
  if (err) throw err;
  data.forEach(line=> console.log(line));
});