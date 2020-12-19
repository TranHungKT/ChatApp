const express = require("express");
const app = express();
const server = require("http").createServer(app);
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var io = (module.exports.io = require("socket.io").listen(server));
const { Chats } = require("./modal/chatSchema");
const socketManager = require("./socket/socketManager");
require("dotenv").config();
const port = 3000;

// const multer = require("multer");
// const fs = require("fs");

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
//   // fileFilter: (req, file, cb) => {
//   //   const ext = path.extname(file.originalname)
//   //   if (ext !== '.jpg' && ext !== '.png' && ext !== '.mp4') {
//   //     return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
//   //   }
//   //   cb(null, true)
//   // }
// });

// var upload = multer({ storage: storage }).single("picture");

// app.post("/api/upload", (req, res) => {
//   console.log("body", req.body);
//   upload(req.body, res, (err) => {
//     if (err) {
//       return res.json({ success: false, err });
//     }
//     console.log("url", res.req);
//     return res.json({ success: true, url: req.file.path });
//   });
// });

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
