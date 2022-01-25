const express = require("express");
const router = express.Router();
const userModel = require ("../models/users")
// const exSession = require("express-session");
router.get("/", (req, res) => {
  res.render("login");
});


router.post("/", async (req, res) =>{
const {email, contraseña} = req.body
const data = await userModel.getUser (email, contraseña)
console.log(data)
if (data !=undefined) {
  res.render("panel")
}
})

module.exports = router;