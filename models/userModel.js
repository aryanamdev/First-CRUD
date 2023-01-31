const mongoose = require("mongoose");

// creating a schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is required"],
    trim: true,
    maxlength: [25, "Name must be 25 characters or less"],
  },
  email: {
    type: String,
    require: [true, "Email is required"],
    unique: true,
  },
});

module.exports = mongoose.model("User", userSchema);
