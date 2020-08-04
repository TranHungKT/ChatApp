const express = require("express");
const app = express();
const server = require("http").createServer(app);
const bodyParser = require("body-parser");

const io = require("socket.io").listen(server);
require("dotenv").config();
const port = 3000;

const mongoose = require("mongoose");

//Connect Db
const initDb = require("./config/initDb");
initDb;

// io.on("connection", (socket) => {
//   console.log("a user connection");
// });

app.use(bodyParser.json());

server.listen(port, () => console.log("server running on :", port));
