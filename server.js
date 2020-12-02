const express = require("express");
const { response } = require("express");
const server = express();

server.use(express.static(__dirname + "/public"));

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(8080, () => {
  console.log("Server is Running Port 8080...");
});

server.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});
