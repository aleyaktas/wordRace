const express = require("express");
const router = express.Router();
const User = require('../models/User');
const bcrypt = require("bcrypt");
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

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
            id: user.id
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
  

module.exports = router;