const express = require("express");
const productModel = require("../models/cars")
const router = express.Router();
const cloudinary = require("cloudinary").v2
const util = require ("util")
router.get("/", async (req, res) => {
    const data = await productModel.getCars()

    data.map((row) => {
        if (row.Imagen) {
        row.Imagen = cloudinary.url(row.Imagen)
      }
      })


    res.render("index",{ cars: data} );
})


module.exports = router;