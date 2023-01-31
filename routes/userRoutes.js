const express = require("express");
const router = express.Router();
const { home, createUser } = require("../controllers/userController");
const { create } = require("../models/userModel");

router.get("/", home);
router.post("/createUser", createUser);
router.

module.exports = router;
