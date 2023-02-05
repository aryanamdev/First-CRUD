// dotenv should be configured in the first line of code
require("dotenv").config();
const { json } = require("express");
const express = require("express");
// importing our connection to the Database
const connectToDB = require("./config/db.connection");
// importing user router
const userRouter = require("./routes/userRoutes");
const app = express();

// importing cors
const cors = require("cors");

// json middleware
app.use(express.json());
// url encoded

// configuring cors middleware
app.use(cors());

// connecting to database
connectToDB();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/", userRouter);

module.exports = app;
