const express = require('express')

const app = express()

const port = 8000

app.get("/", (req, res) => {
    res.send("Home Directory")
})

app.get("/shop", (req, res) => {
    res.send("Welcome to shop")
})

app.get('/signup', (req, res) => {
    res.send("Signup page")
})

app.get('/signout', (req, res) => {
    res.send("signout page")
})
app.listen(port, () =>{
    console.log("aihsdfjk")
})