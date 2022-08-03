const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

// GET api/auth
// Get auth user
// Public
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).sendDate("Server error");
  }
});
// POST api/auth
// Login user
// Public
router.post("/", [check("username", "Please include a valid username").not().isEmpty(), check("password", "Password is required").exists()], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    const payload = {
      user: {
        id: user.id,
        username: user.username,
      },
    };
    jwt.sign(payload, process.env.jwtSecret, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// POST api/auth/addFriends
// Add friends and incoming friend requests
// Private
router.post("/addFriends", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { username } = req.body;
  try {
    let addedUser = await User.findOne({ username }).select("-password");
    let ownUser = await User.findById(req.user.id);
    if (!addedUser) {
      return res.status(400).json({ errors: [{ msg: "This user not found" }] });
    }
    if (addedUser.id == ownUser.id) {
      return res.status(400).json({ errors: [{ msg: "Request failed" }] });
    }
    if (addedUser) {
      if (addedUser.pendingRequests.some((pendingRequest) => pendingRequest._id == ownUser.id)) {
        return res.status(400).json({ errors: [{ msg: "Friend request already sent" }] });
      } else if (ownUser.pendingRequests.some((pendingRequest) => pendingRequest._id == addedUser.id)) {
        return res.status(400).json({ errors: [{ msg: "Friend request already exists, you can accept the request" }] });
      } else if (ownUser.friends.some((friend) => friend._id == addedUser.id)) {
        return res.status(400).json({ errors: [{ msg: "This user is already attached to your friend list" }] });
      }
      {
        await addedUser.pendingRequests.push({ _id: ownUser.id });
        await addedUser.save();
        res.send(addedUser);
      }
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// POST api/auth/acceptFriends
// Accept a friend request
// Private
router.post("/acceptFriends", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { username } = req.body;
  try {
    var me = await User.findById(req.user.id).select("-password");
    var incomingRequest = await User.findOne({ username });
    if (me) {
      if (!me.pendingRequests.some((pendingRequest) => (pendingRequest._id = incomingRequest.id))) {
        return res.status(400).json({ errors: [{ msg: "this user not found" }] });
      } else if (me.friends?.some((friend) => (friend._id = incomingRequest.id))) {
        return res.status(400).json({ errors: [{ msg: "this user is already your friend" }] });
      } else {
        me.friends.push({ _id: incomingRequest.id });
        incomingRequest.friends.push({ _id: me.id });
        (me.pendingRequests = me.pendingRequests?.filter((pendingRequest) => pendingRequest._id != incomingRequest.id)), await me.save();
        await incomingRequest.save();
        res.send(me);
      }
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// POST api/auth/rejectFriends
// Reject friend request
// Private
router.post("/rejectFriends", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { username } = req.body;
  try {
    var me = await User.findById(req.user.id);
    var incomingRequest = await User.findOne({ username });
    if (me) {
      if (!me.pendingRequests.some((pendingRequest) => (pendingRequest._id = incomingRequest.id))) {
        return res.status(400).json({ errors: [{ msg: "Request does not exist!" }] });
      }
      if (me.pendingRequests?.some((pendingRequest) => (pendingRequest._id = incomingRequest.id))) {
        me.pendingRequests = me.pendingRequests?.filter((pendingRequest) => pendingRequest._id != incomingRequest.id);
        await me.save();
        res.send(me);
      }
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// POST api/auth/deleteFriend
// Delete friend
// Private
router.post("/deleteFriend", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { username } = req.body;
  try {
    var me = await User.findById(req.user.id);
    var user = await User.findOne({ username });
    if (me) {
      if (!me.friends.some((friend) => (friend._id = user.id))) {
        return res.status(400).json({ errors: [{ msg: "User not found" }] });
      } else if (me.friends.some((friend) => (friend._id = user.id))) {
        (me.friends = me.friends?.filter((friend) => friend._id != user.id)), (user.friends = user.friends?.filter((friend) => friend._id != me.id));
        await me.save();
        await user.save();
        res.send(me);
      } else if (me.friends.some((friend) => friend._id != user.id)) {
        res.send("This user not your friend");
      }
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// GET api/auth/me
// Get user's own
// Private
router.get("/me", auth, async (req, res) => {
  const populate = [
    { path: "pendingRequests", select: "username _id" },
    { path: "friends", select: "username _id" },
  ];
  try {
    const me = await User.findById(req.user.id).lean().populate(populate);
    res.send(me);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
