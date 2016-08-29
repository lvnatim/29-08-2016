const FS = require("fs");
function filterFilenames(dirName, fileExt, callBack){
  const parsedFileExt = "." + fileExt
  FS.readdir(dirName, (err, data)=>{
    if (err) return callBack(err);
    data = data.filter(line=>line.endsWith(parsedFileExt));
    return callBack(null, data);
  });
}

module.exports = filterFilenames