// const jwt = require("jsonwebtoken")

// const users = require("../users/userModel")
// const secreto = require("../secret")

// module.exports =(req,res,next)=>{
//     const token = req.get("Authorization")

// if(token){
//     jwt.verify(token, secreto.jwtSecret,(err,decode)=>{
//         if(err) return res.status(401).json(err)
//         req.decode=decode
//         next()
//     })

// }else{
//     return res.status(401).json({
//        error: "missing token"
//     })
// }

// }

// function authenticate() {
//     return async (req, res, next) => {
//       try {
//         // const token = req.headers.cookie
//             const token = req.get("Authorization")

//         if (!token) {
//           return res.status(401).json({
//             message: 'invalid auth credentials'
//           })
//         } else {
//           next()
//         }
             
//       } catch(err) {
//         console.log('Error: ', err)
//       }
//     }
//   }
//   module.exports = authenticate


// const secret = require("../secret.js");

// module.exports = (req, res, next) => {
//   const token = req.headers.authorization;

//   if (token) {
//     jwt.verify(token, secret.jwtSecret, (err) => {
//       if (err) {
//         res.status(401).json({ message: "Invalid Credentialss" });
//       } else {
//         next();
//       }
//     });
//   } else {
//     res.status(400).json({ message: "No token provided" });
//   }
// // };
// const jwt = require('jsonwebtoken')

function authenticate() {
  return async (req, res, next) => {
    try {
      const token = req.headers.cookie
      if (!token) {
        return res.status(401).json({
          message: 'invalid auth credentials'
        })
      } else {
        next()
      }
           
    } catch(err) {
      console.log('Error: ', err)
    }
  }
}

module.exports = authenticate