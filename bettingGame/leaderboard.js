const FS = require("fs");
const DATA_PATH = './scores'
const DATA_TEMPLATE = {data:[]}
var jsondata = {};

const requestFromBoard = function(){
  FS.open(DATA_PATH, 'wx', (err, fd)=>{
    if(err){
      FS.readFile(DATA_PATH, (err, data)=>{
        if(err) throw err;
        jsondata = JSON.parse(data);
        console.log(getLeaderBoard());
      });
    } else {
      FS.writeFile(DATA_PATH, JSON.stringify(DATA_TEMPLATE), (err)=>{
        if(err) throw err;
        console.log("saved!");
      });
    }
  })
}

const getLeaderBoard = function(){
  return jsondata.data.sort((a, b)=> b.wins - a.wins );
}

const addPlayerWin = function(player){
  const leaderboard = getLeaderBoard;
  leaderboard.forEach
}


requestFromBoard();