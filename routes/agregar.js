const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    res.render("agregar")
})


// const {body, validationResult} = require ("express-validator");




// router.post("/", 
// [
//     body("marca", "Debe ingresar una marca").exists().isLength({min: 1 ,max: 20}),
//     body("modelo", "Debe ingresar un modelo").exists().isLength({min: 1 ,max: 20}),
//     body("año", "Debe ingresar un año").exists().isLength({min: 1 ,max: 10}),
//     body("km", "Debe ingresar un kilometraje").exists().isLength({min: 1, max: 20}),

// ] (req, res)) => {
//     const error = validationResult(req)
//     if (!error.isEmpty()) {
//         const Alert = error.array()
//         const formCars = {
//             marca: req.body.marca,
//             modelo: req.body.modelo,
//             año: req.body.año,
//             km: req.body.km,
//         }
//         res.render("agregar", {formCars, Alert})
//     } else {
//         res.render("panel")

// }

module.exports = router;