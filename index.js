const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Default page")
})
// req: codsi 
app.get("/user", (req, res) => {
    res.send("user page")
})
app.get("/person", (req, res) => {
    res.send("person page")
})
app.get("/login", (req, res) => {
    res.send("login page")
})

app.listen(3000, ()=> console.log("Server is running"));

