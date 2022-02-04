
const pool = require("../db")

const getCars = async () => {
    const query = `select * from cars order by id desc`
    const row = await pool.query(query)
    return row
}


const deleteCars = async(id) =>{
    const query = "delete from cars where id = ?"
    const row = await pool.query(query, [id] )
    return row
}

const getCar = async(id) =>{
    const query ="select * from cars where id = ?"
    const row = await pool.query(query, [id])
    return row
}

const updateCar = async (marca,anio,modelo,km,id) =>{
    const query = "UPDATE cars SET Marca = ?, Anio = ?, Modelo = ?, Km = ? WHERE id = ?"
    const row = await pool.query(query,[marca,anio,modelo,km,id])
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
    return row
}
module.exports = { getCars, getMarcas, addCars, deleteCars, getCar, updateCar }

