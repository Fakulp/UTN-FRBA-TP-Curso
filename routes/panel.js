const express = require("express");
const router = express.Router();
const productModel = require("../models/cars")
const {body, validationResult} = require("express-validator");

 //---middleware ---
const commonMiddleware = [
 
  body("marca" ,"Debe elegir una marca").exists(),
  body("anio", "Debe ser un año").exists().isNumeric(),
  body("modelo", "Debe escribir un modelo").exists().isLength({ min: 1, max: 50 }),
  body("km", "Debe escribir un kilometraje").exists().isNumeric(),
]

//--fin del middleware--

router.get("/autos", async (req, res) => {
const data = await productModel.getCars()
let exito = false
  if(req.session.exito){
    exito = req.session.exito
    delete req.session.exito
    }
  res.render("autos_listado",{email: req.session.email ,cars: data , exito} );
});


router.get("/autos/agregar", (req, res) => {
  const marca = productModel.getMarcas()
  res.render("autos_agregar", {marca})
})



//-------agregar-------
router.post("/autos/agregar",  commonMiddleware , async (req, res) =>{
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
  
   await productModel.addCars(marca,anio, modelo, km)
    req.session.exito = "Se agrego el auto correctamente"
    res.redirect("/panel/autos")
 }
})
//----agregar-----

//------editar--------
router.get("/autos/:id/editar" , async(req, res)=>{
  const marca = productModel.getMarcas()
  const row = await productModel.getCar(req.params.id)
  if (row == null) {
    res.redirect("/panel/autos")
  } else {
  const formData ={
    id: row.ID,
    marca: row.Marca,
    anio: row.Anio,
    modelo: row.Modelo,
    km: row.Km,
  }
  res.render("autos_agregar" , {formData, marca})
}
})


router.post("/autos/:id/editar",commonMiddleware, async (req, res) =>{
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
    res.render("autos_agregar" , {failAlert ,formData, marca})
  } else{
    const {marca, anio, modelo, km} = req.body
    await productModel.updateCar(marca, anio, modelo, km, req.params.id)
    req.session.exito = "Se modifico el auto correctamente"
    res.redirect("/panel/autos")
  }
})
//------editar--------



//----delete----

router.get("/autos/:id/eliminar" , async (req, res)=>{
   await productModel.deleteCars(req.params.id) 
   req.session.exito = "Se borro el auto correctamente"
   res.redirect("/panel/autos")

})
//----delete----








module.exports = router;





