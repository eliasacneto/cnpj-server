const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(cors())

app.get('/api/cnpj/:cnpj', async (req, res) => {
    try {
        const { cnpj } = req.params
        const response = await axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`)
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ error: 'Erro na busca do CNPJ' })
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})