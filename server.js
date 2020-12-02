// node server.js 입력시 서버 실행 (node.js 설치 필요)
// http://localhost:8080 입력

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