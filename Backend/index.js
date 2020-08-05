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

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/user", require("./routes/user"));

server.listen(port, () => console.log("server running on :", port));
