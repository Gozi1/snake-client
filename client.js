const { Module } = require("module");
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });
  conn.on("connect", () => {
    conn.write("Name: NSN");
  });
  // setInterval( ()=>{
  //   conn.on("connect", () => {
  //       conn.write("Move: up");
  //     });
  // },500)
  // setTimeout( ()=>{conn.on("connect", () => {
  //   conn.write("Move: up");
  // });},500);
  // setTimeout( ()=>{conn.on("connect", () => {
  //   conn.write("Move: left");
  // });},500);
  // setTimeout( ()=>{conn.on("connect", () => {
  //   conn.write("Move: down");
  // });},500);
  // setTimeout( ()=>{conn.on("connect", () => {
  //   conn.write("Move: right");
  // });},500);
  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // });
  // conn.on("connect", () => {
  //   conn.write("Move: left");
  // });
  // conn.on("connect", () => {
  //   conn.write("Move: down");
  // });
  // conn.on("connect", () => {
  //   conn.write("Move: right");
  // });
  return conn;
};

console.log("Connecting ...");

module.exports = {connect};