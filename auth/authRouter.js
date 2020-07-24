const express = require("express");


const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("./authModel");
const secret = require("../secret.js");
const router = express.Router();

//register
router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password);
  user.password = hash;
  if (user.username && user.password && user.email) {
    db.addUser(user)
      .then((user) => {
        res.status(201).json(user);
        const token = generateToken(user)
        console.log(token)

        
      })
      .catch((err) => {
        res.status(500).json(console.log(err));
        console.log(token)
      });
  } else {
    res.status(401).json({
      message: "You will provide a username, password, and email to sign up!",
    });
  }
});

//login
router.post("/login", (req, res) => {
  let { username, password } = req.body;

  db.findBy({ username })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        console.log(token)
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token,
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
        console.log(token)
      }
    })
    .catch((error) => {
      res.status(500).json(error);
      console.log(error)
    });
});

//token generatar
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, secret, options);
}


module.exports = router
