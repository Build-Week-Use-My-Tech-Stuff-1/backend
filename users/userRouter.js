const express =require("express")
const db = require("./userModel")
const router = express.Router()

//get all users --works
router.get("/", (req,res)=>{
    db.getAllUsers()
    .then(users=>{
        res.status(200).json(users)
    })
    .catch(err=>{
        res.status(500).json({message:"cant get users"})
        console.log(err)
    })
})

//user by id ---works
router.get("/:id", (req, res) => {
    const id = req.params.id;
    db.findUserByID(id)
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.status(500)
          .json({ message: "not found" });
          console.log(err)
      });
  });
  
  module.exports = router