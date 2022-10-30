const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = function (key) {
  // your code here
  if ( key === '\u0003' ) {
    process.exit();
  }

  if(key === ""){
    conn.on("connect", () => {
        conn.write("Move: up");
      });
  }
  if(key === ""){
    conn.on("connect", () => {
        conn.write("Move: down");
      });
  }
  if(key === ""){
    conn.on("connect", () => {
        conn.write("Move: left");
      });
  }
  if(key === ""){
    conn.on("connect", () => {
        conn.write("Move: right");
      });
  }
};
setupInput().on("data",handleUserInput);

module.exports = {setupInput};