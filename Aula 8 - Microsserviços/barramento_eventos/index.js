require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 10000

app.post('/eventos', (req,res) => {
    const evento = req.body
    axios.post('http://localhost:4000/eventos', evento)

    axios.post('http://localhost:5000/eventos', evento)

    res.status(200).send({msg: 'ok'})
})

app.listen(
    PORT,
    () => console.log(`Barrament0. ${PORT}`)
)