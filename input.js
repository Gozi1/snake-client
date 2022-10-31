const { Console } = require("console");

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
  if(key === "w"){
    connection.write("Move: up");
  }
  //moves snake down
  if(key === "s"){
    connection.write("Move: down")  
  }
  //moves snake left
  if(key === "a"){
    connection.write("Move: left")   
  }
  //moves snake right
  if(key === "d"){ 
    connection.write("Move: right")
  }
  if(key === "q"){
    connection.write("Say: im here gg");
    
  }
};
setupInput().on("data",handleUserInput);

//exporting setup input;
module.exports = {setupInput};