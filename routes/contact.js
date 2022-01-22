const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer")
router.get("/", (req, res) => {
    res.render("contact")
})


router.post("/", async (req, res) =>{

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