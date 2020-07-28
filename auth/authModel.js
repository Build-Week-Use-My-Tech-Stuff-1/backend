const db = require("../database/dbConfig")

module.exports={
    addUser,
    findBy,
    findUserByID

}



function addUser(user) {
  return db("users")
    .insert(user)
    .returning("id")
    .then(ids => {
      return findUserByID(ids[0]);
    });
}

  function findBy(filter) {
    return db('users')
      .where(filter)
  }

  function findUserByID(id) {
    return db("users")
      .where({ id })
      .first();
  }
  
 