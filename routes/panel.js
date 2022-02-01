const express = require("express");
const router = express.Router();
const productModel = require("../models/cars")
const {body, validationResult} = require("express-validator");

router.get("/autos", async (req, res) => {
const data = await productModel.getCars()
  res.render("autos_listado",{email: req.session.email ,cars: data} );
});


router.get("/autos/agregar", (req, res) => {
  const marcas = productModel.getMarcas()
  res.render("autos_agregar", {marcas})
})

router.post("/autos/agregar",  
//---middleware---

[
  
  body("año", "Debe ser un año").exists().isLength({ min: 1, max: 20 }).isNumeric(),
  body("modelo", "Debe escribir algo").exists().isLength({ min: 1, max: 50 }),
  body("km", "Debe escribir un kilometraje").exists().isLength({ min: 1, max: 500 }).isNumeric(),
] 

//--fin del middleware--
, 
async (req, res) =>{
  const marcas = productModel.getMarcas()
  const fail = validationResult(req)
  if (!fail.isEmpty()) {
    const failAlert = fail.array()
    const formData = {
      año: req.body.anio,
      modelo: req.body.modelo,
      km: req.body.km,
    }

res.render("autos_agregar", {failAlert, formData, marcas})
  } else{
    // const {Marca, Anio, Modelo, Km} = req.body
    // const newCars = {
    //   Marca,
    //   Anio,
    //   Modelo,
    //   Km,
    // }
    await productModel.addCars()
    res.redirect("/panel/autos", {addCars})
  }
})


router.get("/autos/:id/editar" , (req, res)=>{})
router.post("/autos/:id/editar", (req, res) =>{})


router.get("/autos/:id/eliminar" , (req, res)=>{})


module.exports = router;