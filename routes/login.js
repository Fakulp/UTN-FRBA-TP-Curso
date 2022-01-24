const express = require("express");
const router = express.Router();
// const exSession = require("express-session");
router.get("/", (req, res) => {
  res.render("login");
});


router.post("/", async (req, res) =>{
const {email, contraseña} = req.body
const data = await users.getUser (email, contraseña)
console.log(data)
})

module.exports = router;