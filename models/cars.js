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



module.exports = { getCars, getMarcas }

