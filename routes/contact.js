const express = require("express");
const { validationResult } = require("express-validator");
const router = express.Router();
const nodemailer = require("nodemailer")
router.get("/", (req, res) => {
    res.render("contact")
})


router.post("/",


//--Creo un middleware--
[
    body("email", "Debe ingresar un email").exists().isEmail(),
    body("message", "Debe escribir algo").isLength({ min: 1, max: 500 }),
]

//--fin del middleware--



,async (req, res) =>{

   const error = validationResult(req)
   if (!error.isEmpty()) {
       const arrayAlert = error.array()
       res.render ("contact", {arrayAlert})
   }

    const emailMsg = {
        to: "atencion@ejemplo.com",
        from: req.body.email,
        subject: "Mensaje importante",
        html: `${req.body.email} envio el siguiente mensaje ${req.body.message}`,
    }
    const transport =  nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.PORT,
        auth:{
        user: process.env.USER,
        pass: process.env.PASS,
    }
    })
    await transport.sendMail(emailMsg)
    res.render("contact", {
        message: "Mensaje enviado",
    })
})



module.exports = router;