const express = require("express");
const router = express.Router();
const productModel = require("../models/cars")
const {body, validationResult} = require("express-validator");

router.get("/autos", async (req, res) => {
const data = await productModel.getCars()
  res.render("autos_listado",{email: req.session.email ,cars: data} );
});


router.get("/autos/agregar", (req, res) => {
  const marca = productModel.getMarcas()
  res.render("autos_agregar", {marca})
})

router.post("/autos/agregar",  
//---middleware---

[
  body("marca" ,"Debe elegir una marca").exists(),
  body("anio", "Debe ser un año").exists().isNumeric(),
  body("modelo", "Debe escribir algo").exists().isLength({ min: 1, max: 50 }),
  body("km", "Debe escribir un kilometraje").exists().isNumeric(),
] 

//--fin del middleware--
, 
async (req, res) =>{
 const fail = validationResult(req)
  if (!fail.isEmpty()){
    const marca = productModel.getMarcas()
    const failAlert = fail.array()
    const formData = {
      marca: req.body.marca,
      anio: req.body.anio,
      modelo: req.body.modelo,
      km: req.body.km,
    }
 res.render("autos_agregar", {failAlert, formData, marca})
  } else {
    const {marca, anio, modelo, km} = req.body
    console.log(req.body)
   await productModel.addCars(marca,anio, modelo, km)
    res.redirect("/panel/autos")
 }
})


router.get("/autos/:id/editar" , (req, res)=>{})
router.post("/autos/:id/editar", (req, res) =>{})


router.get("/autos/:id/eliminar" , async (req, res)=>{
   await productModel.deleteCars(req.params.id) 
   res.redirect("/panel/autos")
})


module.exports = router;





