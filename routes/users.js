const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// POST api/users
// Register user
// Public 
router.post('/', [
    check('username','username is required')
      .not()
      .isEmpty()
      .isLength({min:3}),
    check('email','Please include a valid email').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({ min: 6 })
  ],
    async (req, res) => {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
      const { username,email,password } = req.body;
      try{
        let user = await User.findOne({ email }) 
        if(user) {
          return res.status(400).json({ errors: [ { msg: 'User already exists' } ] });
        }
        user = new User({
          username,
          email,
          password
        })

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        // Return jsonwebtoken
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


module.exports = router