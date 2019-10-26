const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.get('/', (req, res) => res.send(`User route`));

router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'please provide a valid email').isEmail(),
    check('password', 'Please enter a valid password').isLength({ min: 6 })
  ],
  (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    res.send('User created');
  }
);

module.exports = router;
