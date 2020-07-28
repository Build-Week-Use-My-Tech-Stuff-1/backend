const db = require("../database/dbConfig")

module.exports={
    addUserR,
    findByR,
    findUserByIDR

}



function addUserR(user) {
  return db("Renterusers")
    .insert(user)
    .returning("id")
    .then(ids => {
      return findUserByIDR(ids[0]);
    });
}



  function findByR(filter) {
    return db('Renterusers')
      .where(filter)
  }

  function findUserByIDR(id) {
    return db("Renterusers")
      .where({ id })
      .first();
  }
  
 