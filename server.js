const express = require('express')

const app = express()
const port = 5000

app.get("/api", (req, res) => {
    res.json("test")
})

app.get("/", (req, res) => {
    res.json("Welcome to API service")
})

app.listen(port, (req, res) => {
    console.log(`listening server on port http://localhost:${port}`)
})