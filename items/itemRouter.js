
const express = require("express");
const items = require("./itemModel");
const restricted = require("../auth/restricted");
const jwt = require("jsonwebtoken");
const router = express.Router();

//get all items --works
router.get("/", (req, res) => {
  items
    .getAllItems()
    .then((itemA) => {
      res.status(200).json(itemA);
    })
    .catch((err) => {
      res.status(500).json(console.log(err));
    });
});

//get item by id -- works

    router.get("/:id", (req, res) => {
        items.getItemsByID(req.params.id)
        
            .then((itemid) => {
              res.status(200).json(
               {   
                data:itemid,

                message:"you got item"
              }
                );
            })
            .catch((err) => {
              res.status(500).json(console.log(err));
            });
        });





//new item ---works
router.post("/", 
(req, res) => {


    const newItem = req.body
   
  
    items.addItem(newItem)
    .then((itemm)=>{
      res.status(201).json({
        data:itemm,
        message:"you add item"
      })
  
      console.log(itemm)    
    })
    .catch((err) => {
      console.log({ err });
      res.status(500).json({
        message: "you no add item ",
      });
    });
  
  
  });

//update ---works
router.put("/:id", 
(req, res) => {


    const updateItem = req.body
   
  
    items.addItem(updateItem)
    .then((itemu)=>{
      res.status(201).json({
        data:itemu,
        message:"you update item"
      })
  
      console.log(itemm)    
    })
    .catch((err) => {
      console.log({ err });
      res.status(500).json({
        message: "you no update item ",
      });
    });
  
  
  });




//delte item works
router.delete("/:id", 
(req, res) => {


    const delItem = req.body
   
  
    items.removeItem(delItem)
    .then((itemd)=>{
      res.status(201).json({
        data:itemd,
        message:"you delete item"
      })
  
      console.log(itemd)    
    })
    .catch((err) => {
      console.log({ err });
      res.status(500).json({
        message: "you no delete item ",
      });
    });
  
  
  });



//message to item listing about renting item
router.post("/:id", restricted, async (req, res) => {
  const item_id = req.params.id;
  const { content, user_id } = req.body;

  if (content) {
    items.addMessageToRentItem(item_id, user_id, content)
      .then((success) => {
        res.status(201).json(success);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "cannot send message " });
      });
  } else {
    res.status(400).json({
      message: "cannot be empty",
    });
  }
});

//remove message to item listing
router.delete("/:id", restricted, async (req, res) => {
  try {
    const emessage = await items.getMessagesbyRentalItemID(req.params.id);
    const verifiedToken = jwt.verify(req.headers.authorization, "the secret");
    if (verifiedToken.subject == emessage[0].user_id) {
      const message = await items.removeMessageToRentItem(req.params.id);
      res.status(200).json(message);
    } else {
      res.status(500).json({
        message: "unauthorized",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "cannot remove",
    });
  }
});

module.exports = router;
