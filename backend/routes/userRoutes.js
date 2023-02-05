const express = require("express");
const router = express.Router();
const {
  home,
  createUser,
  editUser,
  getUsers, 
  deleteUser,
} = require("../controllers/userController");
const { create } = require("../models/userModel");

router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.put("/editUser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
