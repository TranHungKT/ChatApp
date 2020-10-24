const express = require("express");
const app = express();
const server = require("http").createServer(app);
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const io = require("socket.io").listen(server);
const { Chats } = require("./modal/chatSchema");
const socketHandler = require("./socket/socketHandler");
require("dotenv").config();
const port = 3000;

const mongoose = require("mongoose");

//Connect Db
const initDb = require("./config/initDb");

const connect = initDb;

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
//io connection
// io.on("connection", (socket) => {
//   socket.on("Input chat message", (msg) => {
//     connect.then((db) => {
//       try {
//         let chat = new Chats({
//           message: msg.chatMessage,
//           sender: msg._id,
//           type: msg.type,
//         });
//         chat
//           .save()
//           .then((doc) => {
//             Chats.find({ _id: doc._id })
//               .populate("sender")
//               .exec()
//               .then((doc) => {
//                 return io.emit("Output chat message", doc);
//               })
//               .catch((err) => console.log(err));
//           })
//           .catch((err) => console.log(err));
//       } catch (err) {
//         console.log(err);
//       }
//     });
//   });
// });

// io.on("connection", async (socket) => {
//   try {
//     let socketObj = new socketHandler();
//     var currentRoom = "asd";
//     socket.on("Join_room", (room) => {
//       console.log("JOIN ROOM", room.name);
//       currentRoom = room.name;
//       // console.log('cu', currentRoom)
//       socket.join(currentRoom);
//     });
//     socket.on("Client_send_messages", (inputMessage) => {
//       let { chatMessage, _id, to } = inputMessage;
//       // console.log("send message");
//       let newChat = new Chats({
//         message: chatMessage,
//         sender: _id,
//         to: to,
//       });
//       io.to(currentRoom).emit("Output_chat_message", newChat);

//       // newChat
//       //   .save()
//       //   .then((doc) => {

//       //   })
//       //   .catch((err) => console.log(err));
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.use("/", (req, res) => res.send("WELCOME"));
app.use("/user", require("./routes/user"));

server.listen(port, () => console.log("server running on :", port));
