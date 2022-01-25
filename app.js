const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const PORT = 3005
const expSession = require("express-session")
require("dotenv").config()


//--express--

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
//-- express--

// --express session--
app.use(expSession ({
    secret: "keyboard",
    resave: false,
    saveUninitialized: true,
  })
  )

const auth = async (req, res, next) =>{
    if (req.session.email) {
        next()
    } else {
        res.render("login")
    }
}

  //--express session--





//-------HBS--- 

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

hbs.registerPartials(path.join(__dirname, "views/partials"));
//------HBS----




//---DECLARO RUTAS---
const routeIndex = require("./routes/index");
const routeLogin = require("./routes/login")
const routePanel = require("./routes/panel");
const routeContacts = require("./routes/contact");




app.use("/", routeIndex);
app.use("/login", routeLogin)
app.use ("/panel", auth , routePanel)
app.use ("/contact", routeContacts)
//--- DECLARO RUTAS---


app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});

