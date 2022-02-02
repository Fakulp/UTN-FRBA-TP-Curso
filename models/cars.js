const pool = require("../db")

const getCars = async () => {
const query = `select * from cars`
const row = await pool.query(query)
return row
}

const getMarcas = ()=>{
    return [
        {nombre: "Chevrolet"},
        {nombre: "Ford"},
        {nombre: "Renault"},
        {nombre: "BMW"},
        {nombre: "Fiat"}
    ]
}

const addCars = async (Marca, Anio, Modelo, Km) =>{
    const query ="insert into cars (Marca , Anio , Modelo , Km ) value (?)"
    const row = await pool.query(query, [[Marca, Anio, Modelo, Km]]) 
    console.log(Marca)
    console.log(Anio)
    console.log(Modelo)
    console.log(Km)
    return row
}
module.exports = { getCars, getMarcas, addCars }

