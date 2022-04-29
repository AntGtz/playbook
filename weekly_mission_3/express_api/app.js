const express = require('express')
const app = express()
app.use(express.json())
const port=3000

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/v1/explorers', (req, res) => {
    console.log(`Api explorers GET ALL request ${new Date()}`)
    const explorer1 = {id:1, name: "Antonio"}
    const explorer2 = {id:2, name: "Antonio2"}
    const explorer3 = {id:3, name: "Antonio3"}
    const explorer4 = {id:4, name: "Antonio4"}
    const explorers= [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

app.post('/v1/explorers', (req, res) => {
    console.log(`Api explorers POST request ${new Date()}`)
    const requestBody = req.body
    res.status(201).json({message: 'created'})
})

app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body
    res.status(200).json({message:'updated!'})
})

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body
    res.status(200).json({message: 'deleted'})
})