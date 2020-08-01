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


router.get("/single/:id",(req, res) => {
  items
    .getItemsByID(req.params.id)

    .then((itemid) => {
      res.status(200).json({
        data: itemid,

        message: "you got item",
      });
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
        data: itemm,
        message: "you added item",
      });

      console.log(itemm);
    })
    .catch((err) => {
      console.log({ err });
      res.status(500).json({
        message: "you failed to add item ",
      });
    });
});

//update ---works
router.put("/:id", (req, res) => {
  const updateItemA = req.body;
  const idU = req.params.id

  items
    .updateItem(idU,updateItemA)
    .then((itemu) => {
      res.status(201).json({
        data: itemu,
        message: "you updated item",
      });

      console.log(itemm);
    })
    .catch((err) => {
      console.log({ err });
      res.status(500).json({
        message: "you didnt update item ",
      });
    });
});

//delete item --works
router.delete("/:id", (req, res) => {
  
  const id = req.params.id;

  items
    .removeItem(id)
    .then((itemd) => {
      res.status(201).json({
        data: itemd,
        message: "you deleted item",
      });

      console.log(itemd);
    })
    .catch((err) => {
      console.log({ err });
      res.status(500).json({
        message: "you didnt delete item ",
      });
    });
});

//message to item listing about renting item --- works

router.post("/:id", (req, res) => {
  const item_id = req.params.id;
  const { content, user_id } = req.body;

  items
    .addMessageToRentItem(item_id, user_id, content)
    .then((messagesent) => {
      res.status(201).json({
        data:messagesent,
        message: "you sent this ",
      });

      console.log(messagesent);
    })
    .catch((err) => {
      console.log({ err });
      res.status(500).json({
        message: "you failed to send  ",
      });
    });
});


//get all messages --works
router.get("/:mess/", (req, res) => {
    items
      .getAllMessages()
      .then((mes) => {
        res.status(200).json(mes);
      })
      .catch((err) => {
        res.status(500).json(console.log(err));
      });
  });




module.exports = router;
