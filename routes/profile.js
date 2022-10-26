const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const mailSender = require("../utils/Mailer");

// POST api/profile/changePassword
// Change password
// Private
router.post("/changePassword", auth, async (req, res) => {
  const { password, newPassword } = req.body;
  try {
    const user = await User.findById(req.user.id);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();
    res.json({ msg: "Password changed successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// POST api/profile/forgotPassword
// Forgot user password
// Public
router.post("/forgotPassword", async (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "User does not exist" }] });
    }
    if (user) {
      //random password generator
      const randomPassword = Math.random().toString(36).slice(-8);
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(randomPassword, salt);
      await user.save();
      mailSender(email, (username = user.username), randomPassword);

      res.json({ msg: "Password changed successfully" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

//

module.exports = router;
