const importData = require("./data.json");

const getById = async (req, res) => {
    const [data] = await importData
    const item =  data.aulas.filter(item => item.day == req.params.id)
    res.send(item)
}


module.exports = {
    getById
}
