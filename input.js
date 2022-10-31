const { Console } = require("console");
const { MOVE_UP_KEY,MOVE_DOWN_KEY,MOVE_LEFT_KEY,MOVE_RIGHT_KEY, Player_MSG } = require("./constants");
let connection;
// stdin setup
const setupInput = (conn) => {
  // the conn object
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  
  // exits when Ctrl + c are pressed
  if ( key === '\u0003' ) {
    process.exit();
  }
  //prints out key pressed
  console.log(key);
  //moves snake up
  if(key === MOVE_UP_KEY){
    connection.write("Move: up");
  }
  //moves snake down
  if(key === MOVE_DOWN_KEY){
    connection.write("Move: down")  
  }
  //moves snake left
  if(key === MOVE_LEFT_KEY){
    connection.write("Move: left")   
  }
  //moves snake right
  if(key === MOVE_RIGHT_KEY){ 
    connection.write("Move: right")
  }
  if(key === Player_MSG){
    connection.write("Say: im here gg");
  }
};
setupInput().on("data",handleUserInput);

//exporting setup input;
module.exports = {setupInput};