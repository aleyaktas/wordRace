const express = require("express");
const router = express.Router();
const User = require('../models/User');
const bcrypt = require("bcrypt");
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')

// POST api/auth
// Login user
// Public 
router.post('/', [
    check('username','Please include a valid username').not().isEmpty(),
    check('password','Password is required').exists()
  ],
    async (req, res) => {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
      const { username,password } = req.body;
      try{
        let user = await User.findOne({ username }) 
        if(!user) {
          return res
          .status(400)
          .json({ errors: [ { msg: 'Invalid Credentials' } ] });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
          return res
          .status(400)
          .json({ errors: [ { msg: 'Invalid Credentials' } ] });
        }
        const payload = {
          user: {
            id: user.id,
            username: user.username
          }
        }
        jwt.sign(
          payload, 
          process.env.jwtSecret,
          { expiresIn: 360000 },
          (err, token) => {
            if(err) throw err;
            res.json({ token });
          });
      } catch(err) {
        console.log(err.message);
        res.status(500).send('Server error')
      }
    });
  
// POST api/auth/addFriends
// Add friends and incoming friend requests
// Private 
router.post('/addFriends', auth, async (req,res) => {
  const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
  const { username } = req.body;
  try {
    let addedUser = await User.findOne({username})
    let ownUser = await User.findById(req.user.id)
    if(addedUser) {
      if(addedUser.pendingRequests?.some(pendingRequest => pendingRequest.id===req.user.id)) {
        return res
        .status(400)
        .json({ errors: [ { msg: 'Friend request already sent' } ] });
        
      } else if(ownUser.pendingRequests?.some(pendingRequest => pendingRequest.id===addedUser.id)) {
        return res
        .status(400)
        .json({ errors: [ { msg: 'Friend request already exists, you can accept the request' } ] });
      } else if(ownUser.friends?.some(friend => friend.id===addedUser.id)) {
        return res
        .status(400)
        .json({ errors: [ { msg: 'This user is already attached to your friend list' } ] });
      }
       {
        await addedUser.pendingRequests.push({id:req.user.id, username: req.user.username})
        await addedUser.save();
        res.send(addedUser)
      }
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error')
  }
})

// POST api/auth/acceptFriends
// Accept a friend request
// Private 
router.post('/acceptFriends', auth, async (req,res) => {
  const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
  const { username } = req.body;
  try {
    var user = await User.findById(req.user.id)
    var incomingRequest = await User.findOne({username})
    if(user && incomingRequest) {
      if(user.friends?.some(friend => friend.id=incomingRequest.id)){
        return res
        .status(400)
        .json({ errors: [ { msg: 'this user is already your friend' } ] });
      } else {
        user.friends.push({id:incomingRequest.id, username: incomingRequest.username })
        incomingRequest.friends.push({id:user.id, username: user.username })
        user.pendingRequests = user.pendingRequests?.filter(pendingRequest => pendingRequest.id !== incomingRequest.id),
        await user.save();
        await pendingRequest.save();
        res.send(user)
      }
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error')
  }
})

// POST api/auth/rejectFriends
// Reject friend request
// Private
router.post('/rejectFriends', auth, async (req, res) => {
  const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
  const { username } = req.body;
  try {
    var user = await User.findById(req.user.id)
    var incomingRequest = await User.findOne({username})
    if(user && incomingRequest) {
      if(user.pendingRequests?.some(pendingRequest => pendingRequest.id=incomingRequest.id)) {
        user.pendingRequests = user.pendingRequests?.filter(pendingRequest => pendingRequest.id !== incomingRequest.id)
        await user.save();
        res.send(user)
      }
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error')
  }
})

module.exports = router;