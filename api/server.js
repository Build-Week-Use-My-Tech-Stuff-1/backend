const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const authRouter = require("../auth/authRouter")
const itemsRouter = require("../items/itemRouter")
const userRouter = require("../users/userRouter")
const authenticate = require("../auth/restricted")

const server = express()

server.use(cors())
server.use(express.json())
server.use(helmet())

server.use("/api/auth",authRouter)
server.use("/api/items"
,authenticate()
,itemsRouter)
server.use("/api/users",userRouter)

server.get("/", async (req, res) => {
    res.status(200).json({ api: "api is good" });
  });
  
  module.exports = server;
  