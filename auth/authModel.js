const db = require("../database/dbConfig")

module.exports={
    addUser,
    findBy,
    findUserByID

}





// function addUser(user){
//     return db("users")
//     .insert(user)
//     .returning("id")
//     .then(id0=>{
//         return findUserByID(id0[0])
//     })
// }


// async function addUser(user) {
//     const [id] = await db("users").insert(user);
//     return findBy(id);
//   }
  

// function findBy(filter) {
//     return db("users").where(filter);
//   }
function addUser(user) {
    return db('users').insert(user)
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
  
 