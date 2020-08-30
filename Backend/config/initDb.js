const mongoose = require("mongoose");

const db = process.env.MONGO_URI;

function initDb() {
  return mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDb connected"))
    .catch((err) => console.log(err));
}

module.exports = initDb();
