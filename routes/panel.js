const express = require("express");
const router = express.Router();
const productModel = require("../models/productModel")

router.get("/", async (req, res) => {
const data = await productModel.getCars()
  res.render("panel",{email: req.session.email ,cars: data} );
});
module.exports = router;