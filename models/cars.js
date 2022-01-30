const pool = require("../db")


const getCars = async () => {

const query = `select * from cars`
const row = await pool.query(query)
return row
}

module.exports = { getCars }
