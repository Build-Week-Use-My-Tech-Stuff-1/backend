const db = require("../database/dbConfig")

module.exports = {
    getAllUsersR,
   
    findUserByIDR

}

function getAllUsersR(){
    return db("Renterusers")
}


function findUserByIDR(id){
    return db("Renterusers")
    .where({id})
    .first()
}

