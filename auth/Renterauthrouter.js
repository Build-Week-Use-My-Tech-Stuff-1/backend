
const router = require('express').Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const db = require("./RenterauthModel");
// const express = require("express");



// const secret = require("../secret.js");


router.post('/registerRent', (req, res) => {


  const cred = req.body
  const hash = bcrypt.hashSync(cred.password,10)
  cred.password = hash

  db.addUserR(cred)
  .then((userr)=>{
    res.status(201).json({
      data:userr,
      message:"you registratedR"
    })
const token = newToken(uuser)
    console.log(token)    
  })
  .catch((err) => {
    console.log({ err });
    res.status(500).json({
      message: "you have not registerR ",
    });
  });


});
// login renter
router.post("/loginRent", async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await db.findByR({
      username
    }).first()

    if (!user) {
      return res.status(401).json({
        message: "failed to login 1"
      })
    }

    const passwordValid = await bcrypt.compare(password, user.password)

    if (!passwordValid) {
      return res.status(401).json({
        message: "failed to login 2"
      })
    }

    const payload = {
      userId: user.id,
      username: user.username
    }


    res.cookie("token", jwt.sign(payload, "can i tell you something?"))

    res.json({
      message: `What ${user.username}!`
    })
  } catch (err) {
    next(err)
  }
})

// logout - works
router.get("/logout", async (req, res, next) => {
  res.clearCookie("token")
  res.json({ message: "logged out" })
})

module.exports = router
