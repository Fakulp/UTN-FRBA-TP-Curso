const pool = require ("../db")
const md5 = require("md5")


const getUser = async (email, contraseña) => {
    const query = `SELECT * FROM usuarios WHERE email= ? AND contraseña = ? `
    const anwser = await pool.query(query,[email, md5(contraseña)] )
    return anwser[0]
}

module.exports = { getUser }