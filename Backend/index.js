const express = require("express");
const app = express();
const server = require("http").createServer(app);
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var io = (module.exports.io = require("socket.io").listen(server));
const { Chats } = require("./modal/chatSchema");
const socketManager = require("./socket/socketManager");
require("dotenv").config();
const port = 3001;

const mongoose = require("mongoose");

//Connect Db
const initDb = require("./config/initDb");

const connect = initDb;

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

io.on("connection", socketManager);

app.use("/user", require("./routes/user"));

server.listen(port, () => console.log("server running on :", port));
