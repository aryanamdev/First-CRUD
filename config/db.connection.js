const mongoose = require("mongoose");
const { MONGO_URL } = process.env;


const dbConnect = () => {
  // Making a connection with Database
  mongoose
    .connect(MONGO_URL)
    .then((con) => {
      console.log(`Connected to DB:${con.connection.host}`);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1)
    }, );
};

module.exports = dbConnect;
