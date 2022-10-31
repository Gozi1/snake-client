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
  //   conn.on("data", () => {
  //       conn.write("Move: up");
  //     });
  // },500)
  // setTimeout( ()=>{conn.on("connect", () => {
  //   conn.write("Move: up");
  // });},500);
  // setTimeout( ()=>{conn.on("connect", () => {
  //   conn.write("Move: left");
  // });},1000);
  // setTimeout( ()=>{conn.on("connect", () => {
  //   conn.write("Move: down");
  // });},1500);
  // setTimeout( ()=>{conn.on("connect", () => {
  //   conn.write("Move: right");
  // });},2000);
  return conn;
};



module.exports = {connect};