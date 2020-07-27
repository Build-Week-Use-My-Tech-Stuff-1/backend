// router.get("/id", (req, res) => {
//     items
//       .getItemsByID()
//       .then((itemB) => {
//         res.status(200).json(itemB);
//       })
//       .catch((err) => {
//         res.status(500).json(console.log(err));
//       });
//   });

//new item
// router.post("/", 
// restricted, 
// async (req, res) => {
//   const newItem = req.body;

//   if (newItem.name) {
//     items
//       .insert(newItem)
//       .then((newItem) => {
//         if (newItem) {
//           db.get().then((newi) => {
//             res.status(201).json(newi);
//             console.log(newi)
//           });
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json({ message: "cannot add" });
//       });
//   }
// });

//NMEW ITEM 2
// router.post("/", 
// restricted, 
// async (req, res) => {
//   const newItem = req.body;

//   if (newItem.name) {
//     items
//       .insert(newItem)
//       .then((newItem) => {
//         if (newItem) {
//           db.get().then((newi) => {
//             res.status(201).json(newi);
//             console.log(newi)
//           });
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json({ message: "cannot add" });
//       });
//   }
// });

update item

//update item
// router.put("/:id", restricted, async (req, res) => {
//   const itemid = req.res.id;
//   const updated = req.body;

//   if (updated) {
//     items
//       .updateItem(itemid, updated)
//       .then((updated) => {
//         if (updated) {
//           items
//             .get()
//             .then((it) => {
//               res.status(200).json(it);
//             })
//             .catch((err) => {
//               res.status(500).json({ message: "cannot update items" });
//             });
//         } else {
//           res.status(404).json({
//             message: "item id for updaye not found",
//           });
//         }
//       })
//       .catch((err) => {
//         res.status(500).json(console.log(err));
//       });
//   }
// });



//remove item
// router.delete("/:id", restricted, async (req, res) => {
//   const itemid = req.params.id;
//   items
//     .removeItem(itemid)
//     .then((item1) => {
//       if (item1) {
//         items.get().then((item1) => {
//           res.status(200).json(item1);
//           console.log("item deld")
//         });
//       } else {
//         res.status(404).json({
//           message: "item not found",
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "cannot be removed" });

//     });
// });



// router.get("/:id", (req, res) => {
//   try {
//     const itemAll = items.getItemsByID(req.params.id);
//     const itemMessages = items.getMessagesbyRentalItemID;
//     res.status(200).json(itemAll, itemMessages);
//   } catch {
//     res.status(500).json({message:"fail"});
    
//   }
// });

// router.get("/:id", (req, res) => {
// items.getItemsByID()

//     .then((itemid) => {
//       res.status(200).json(itemid);
//     })
//     .catch((err) => {
//       res.status(500).json(console.log(err));
//     });
// });
