const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("agregar")
})
// const {body, validationResult} = require ("express-validator")
// router.post("/", 
// [
//     body("marca", "Debe ingresar una marca").exists().isLength({min: 1 max: 20})
//     body("modelo", "Debe ingresar un modelo").exists().isLength({min: 1 max: 20})
//     body("año", "Debe ingresar un año").exists().isLength({min: 1 max: 10})
//     body("km", "Debe ingresar un kilometraje").exists().isLength({min: 1 max: 20})
// ], (req, res))

module.exports = router;