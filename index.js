const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const version = process.env.VERSION || "Default"

app.get('/', (req, res) => {
    res.send(`Hello World, running version ${version}`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})