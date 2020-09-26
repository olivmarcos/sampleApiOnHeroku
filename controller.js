const importData = require("./data.json");
const importDiscipinas = require('./disciplinas.json')

const getById = async (req, res) => {
    const [data] = await importData
    const item =  data.aulas.filter(item => item.day == req.params.id)
    res.send(item)
}

const getNotaByName = async (req, res) => {
    const [data] = await importDiscipinas
    const [item] = data.discipinas.filter(item => item.id === req.params.id)
    res.send(item)
}

module.exports = {
    getById,
    getNotaByName
}
