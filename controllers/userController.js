const { findOne } = require("../models/userModel");
const User = require("../models/userModel");

// exporting home and writing the logic
exports.home = (req, res) => {
  res.send("Hello!");
};

//post request for creating a user
exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    // To check all the details
    if (!name || !email) {
      throw new Error("Name and Email are Required");
    }
    const userExits = await User.findOne({ email });
    if (userExits) {
      throw new Error("Email Already Exists");
    }
    // Inserting into the Database

    const user = await User.create({ name, email });
    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

// getting users
exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// editing the user
exports.uditUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "User Updated Successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};
