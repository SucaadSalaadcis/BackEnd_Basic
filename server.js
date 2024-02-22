const express = require("express");

const app = express();

// get data
app.get("/dat/display" , (req, res) => {
    res.send("This is display data api")
})
// create post api
app.post("/create" , (req, res) => {
    res.send("This is first post in nodejs")
})
// update data
app.put("/data/update", (req,res) => {
    res.send("This is Update data API")
})
// delete
app.delete("/data/delete" , (req, res) => {
  res.send("This is delete data API")
})



app.listen(3000, ()=> console.log("Server is running"));

