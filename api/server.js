const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const cookieParser = require('cookie-parser')

const authRouter = require("../auth/authRouter")
const itemsRouter = require("../items/itemRouter")
const userRouter = require("../users/userRouter")
const authenticate = require("../auth/restricted")
const rentauthRouter = require("../auth/Renterauthrouter")
const RenterUser = require("../renterUser/renterUserRoute")

const server = express()

server.use(cors({
  credentials: true,
  origin: "http://localhost:5000",
}))
server.use(express.json())
server.use(helmet())
server.use(cookieParser())
server.use("/api/auth",authRouter)
server.use("/api/authR",rentauthRouter)
server.use("/api/items"

,itemsRouter)
server.use("/api/users",userRouter)
server.use("/api/Renterusers"
,authenticate(),
RenterUser)


server.get("/", async (req, res) => {
    res.status(200).json({ api: "api is good" });
  });
  
  module.exports = server;
  