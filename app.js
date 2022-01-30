const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const PORT = 3005
const expSession = require("express-session")
require("dotenv").config()


//--express--

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))




//VARIABLE LOCAL--//
const isLog = (req, res, next) =>{
  if(req.session.email){
// console.log(`User logged: %s`, req.session.email)
res.locals.hasUser = true
} else{
  // console.log(`Guest`)
  res.locals.hasUser = false
}
  next()
  }
  //--VARIABLE LOCAL--//

//-- express--



//-------HBS--- 
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));
//------HBS----


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

//---DECLARO RUTAS---
const routeIndex = require("./routes/index");
const routeLogin = require("./routes/login")
const routePanel = require("./routes/panel");
const routeContacts = require("./routes/contact");
const routeAgregar = require("./routes/agregar")


app.use("/",isLog, routeIndex);
app.use("/login", routeLogin)
app.use ("/panel", auth , routePanel)
app.use ("/agregar", auth , routeAgregar)
app.use ("/contact", routeContacts)
//--- DECLARO RUTAS---


app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});

