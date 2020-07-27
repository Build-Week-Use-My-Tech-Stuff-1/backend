const db = require("../database/dbConfig")

module.exports = {
    getAllItems,
    getItemsByID,
    addItem,
    updateItem,
    removeItem,
    addMessageToRentItem,
    removeMessageToRentItem,
    getAllMessages,
    getMessagesbyRentalItemID

}
// getAllRentalmessages,

function getAllItems(){
    return db("items")
}

// function getItemsByID(id) {
//     return db("items")
//       .where({ id })
//       .first();
//   }

  function getItemsByID(id) {
    return db('items').where({ id: Number(id) });
  }

  function addItem(item) {
    return getAllItems().insert(item);
  }

  function updateItem(id, updates) {
    return db("items")
      .where({ id })
      .update(updates)
  }

  function removeItem(id) {
    return db("items")
      .where("id", id)
      .del()
  }

    
  
  function addMessageToRentItem(item_id, user_id, content) {
    return db("messages","items").insert({
      item_id: item_id,
      user_id: user_id,
      content: content
    });
   
  }

//   function addMessageToRentItem(message) {
//     return getAllItems().insert(message);
//   }

  function removeMessageToRentItem(message) {
      return getAllItems()
      .where({message})
      .del()
  }

function getAllMessages(){
    return db("messages")
}

  function getMessagesbyRentalItemID(){
    return db("messages")
    .select(["*"])
    .from("messages")
    .where("items.category", "=", id);
}



