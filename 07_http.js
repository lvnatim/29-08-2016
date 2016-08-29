const HTTP = require("http");
const url = process.argv[2];

HTTP.get(url, (response)=>{
  response.setEncoding('utf8')
  response.on("data", (data)=>console.log(data));
  response.on("error", (error)=>console.log(error));
});