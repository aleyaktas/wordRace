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
      const randomNumber = Math.floor(10000 + Math.random() * 90000);
      user.otp = randomNumber;
      await user.save();

      mailSender(email, (username = user.username), randomNumber);
      res.json({ msg: "Email send successfull for reset password" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// POST api/profile/otp
// Check OTP control
// Public
router.post("/otp", async (req, res) => {
  const { email, otp } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "User does not exist" }] });
    }
    if (user.otp == otp) {
      res.status(200).json({ msg: "You can set new password" });
    } else {
      res.status(400).json({ errors: [{ msg: "Invalid code" }] });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// PUT api/profile/newPassword
// Set new password
// Public
router.put("/newPassword", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "User does not exist" }] });
    }
    if (user) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      res.status(200).json({ msg: "Password changed successfuly" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// PUT api/profile/changeUsername
// Change username
// Private
router.put("/changeUsername", async (req, res) => {
  const { email, username } = req.body;

  try {
    let user = await User.findOne({ email });
    let checkUsername = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "User does not exist" }] });
    }

    if (checkUsername) {
      return res.status(400).json({ errors: [{ msg: "This username already exists" }] });
    }

    if (user) {
      user.username = username;
      await user.save();

      res.status(200).json({ msg: "Username changed successfuly" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// DELETE api/profile/deleteAccount
// Delete account
// Private
router.delete("/deleteAccount", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user) {
      await user.remove();
      res.status(200).json({ msg: "Account deleted successfuly" });
    } else {
      res.status(400).json({ errors: [{ msg: "User does not exist" }] });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
