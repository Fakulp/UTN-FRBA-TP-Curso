const express = require("express");
const router = express.Router();
const productModel = require("../models/cars")

router.get("/autos", async (req, res) => {
const data = await productModel.getCars()
  res.render("autos_listado",{email: req.session.email ,cars: data} );
});


router.get("/autos/agregar", (req, res) => {
  res.render("agregar")
})

router.post("/autos/agregar", (req, res) =>{
})


router.get("/autos/:id/editar" , (req, res)=>{})
router.post("/autos/:id/editar", (req, res) =>{})


router.get("/autos/:id/eliminar" , (req, res)=>{})


module.exports = router;