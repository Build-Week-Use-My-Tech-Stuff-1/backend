const db = require("../database/dbConfig");
const Auth = require("../auth/authModel");
const request = require("supertest");
const server = require("../api/server");
const items = require("../items/itemModel");

const router = require("../items/itemRouter");
const users = require("../users/userModel");


//  route
describe('test route', () => {
    it(' 200 status code', async () => {
        const code = 200
        const response = await request(server).get('/')
        expect(response.status).toEqual(code)
    })
})

describe("server GET", () => {
    it("shud be", () => {
      return request(server)
        .get("/")
        .expect(200);
    });
    it(" respond with JSON", () => {
      return request(server)
        .get("/")
        .expect("Content-Type", /json/);
    });
  });

// regsiter 
describe("register user", () => {

    it('returns 500 ', async () => {
        const payload = { badusername: "abccc", badpassword: "abccc" }
        const response = await request(server)
            .post("/api/auth/register")
            .send(payload)
        expect(response.statusCode).toBe(500)
    })
})

// login 
describe("login userR", () => {
    it(' 200 login ', async () => {
        const payload = { username: "jack", password: "bamb",email:"chapper@unatco.com" }
        const response = await request(server)
            .post("/api/authR/loginRent")
            .send(payload)
        expect(response.statusCode).toBe(200)
    })


    it('returns 500', async () => {
        const payload = { NOTusername: "bad2", NOTpassword: "bad2" }
        const response = await request(server)
            .post("/api/authR/loginRent")
            .send(payload)
        expect(response.statusCode).toBe(500)
    })
})



describe("usersModel", () => {
    describe("addUser", () => {
      it("shud be", async () => {
        await users.getAllUsers();
        expect(200);
      });
    });
    describe("getUserById", () => {
      it("shud be", async () => {
        await users.findUserByID(1);
        expect(200);
      });
    });
  });
  


describe("itemModel", () => {
    describe("getitems", () => {
      it("shud be", async () => {
        await items.getAllItems();
        expect(200);
      });
    });
    describe("getUserById", () => {
      it("shud be 200 ", async () => {
        await items.getItemsByID(1);
        expect(200);
      });
    });
  });





