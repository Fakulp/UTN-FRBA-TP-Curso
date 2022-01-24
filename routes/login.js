const express = require("express");
const router = express.Router();
const expressSession = require("express-session")
router.get("/", (req, res) => {
  res.render("login");
});
module.exports = router;