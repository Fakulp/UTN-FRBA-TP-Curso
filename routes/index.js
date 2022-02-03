const express = require("express");
const productModel = require("../models/cars")
const router = express.Router();
router.get("/", async (req, res) => {
    const data = await productModel.getCars()
    res.render("index",{ cars: data} );
})


module.exports = router;