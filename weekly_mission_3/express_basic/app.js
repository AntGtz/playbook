const express= require('express') //usar objeto express
const app= express() //app de express
const port = 3000//puerto de la app 'localhost:3000'

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/launchx', (req, res) => {
    res.send('bienvenido a launchx')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})