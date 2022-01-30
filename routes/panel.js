const express = require("express");
const router = express.Router();
const productModel = require("../models/productModel")

router.get("/", async (req, res) => {
const data = await productModel.getCars()
  res.render("panel",{email: req.session.email , data} );
  console.log(data)
});
module.exports = router;