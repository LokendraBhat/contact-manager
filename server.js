// console.log("Check it out");
const express = require("express")
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;


//// Its a first try to check the request and response without routes using get 
// app.get("/api/contacts", (req, res) => {
//     // res.send("Get all your msg")
//     // res.json({ message: "Get all your msg"});
//     res.status(200).json({msg: "Get all of Messages"});
// });

app.use("/api/contacts", require("./routes/contactRoutes"));     // Middleware

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

