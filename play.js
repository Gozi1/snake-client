const net = require("net");

// establishes a connection with the game server
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

setupInput(connect());
