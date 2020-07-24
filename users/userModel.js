const db = require("../database/dbConfig")

module.exports = {
    getAllUsers,
   
    findUserByID

}

function getAllUsers(){
    return db("users")
}


function findUserByID(id){
    return db("users")
    .where({id})
    .first()
}

