
const express = require("express");
const items = require("./itemModel");
const restricted = require("../auth/restricted");
const jwt = require("jsonwebtoken");
const router = express.Router();

//get all items
router.get("/", (req, res) => {
  items
    .get()
    .then((itemA) => {
      res.status(200).json(itemA);
    })
    .catch((err) => {
      res.status(500).json(console.log(err));
    });
});

//get item by id
router.get("/id", (req, res) => {
  try {
    const itemAll = items.getItemsByID(req.params.id);
    const itemMessages = items.getMessagesbyRentalItemID;
    res.status(200).json(itemAll, itemMessages);
  } catch {
    res.status(500).json(console.log(err));
  }
});

//new item
router.post("/", restricted, async (req, res) => {
  const newItem = req.body;

  if (newItem.name) {
    items
      .insert(newItem)
      .then((newItem) => {
        if (newItem) {
          db.get().then((newi) => {
            res.status(201).json(newi);
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "cannot add" });
      });
  }
});

//update item
router.put("/:id", restricted, async (req, res) => {
  const itemid = req.res.id;
  const updated = req.body;

  if (updated) {
    items
      .updateItem(itemid, updated)
      .then((updated) => {
        if (updated) {
          items
            .get()
            .then((it) => {
              res.status(200).json(it);
            })
            .catch((err) => {
              res.status(500).json({ message: "cannot get items" });
            });
        } else {
          res.status(404).json({
            message: "item id not found",
          });
        }
      })
      .catch((err) => {
        res.status(500).json(console.log(err));
      });
  }
});

//remove item
router.delete("/:id", restricted, async (req, res) => {
  const itemid = req.params.id;
  items
    .removeItem(itemid)
    .then((item1) => {
      if (item1) {
        items.get().then((item1) => {
          res.status(200).json(item1);
        });
      } else {
        res.status(404).json({
          message: "item not found",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "cannot be removed" });
      
    });
});

//message to item listing about renting item
router.post("/:id", restricted, async (req, res) => {
  const item_id = req.params.id;
  const { content, user_id } = req.body;

  if (content) {
    db.comment(item_id, user_id, content)
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
