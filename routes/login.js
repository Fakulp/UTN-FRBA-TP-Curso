const express = require("express");
const router = express.Router();
const userModel = require ("../models/users")

router.get("/", (req, res) => {
  res.render("login");
});





router.post("/", async (req, res) =>{
const {email, contraseña} = req.body
const data = await userModel.getUser (email, contraseña)
if (data !=undefined) {
  req.session.email = email
  res.render("panel", {email})
} else {
  const message = "Usuario/Contraseña incorrectas"
  res.render ("login", {message})
}
})

module.exports = router;