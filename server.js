const cors = require("cors");
const express = require("express");
const connectDb = require("./intializedb");

const app = express();

app.use(cors());
app.use(espress.json());

connectDb();

app.get('/', (req,res) => {
    res.send("API running");
});

app.listen(5000, ()=> console.log("API running on port 5000"));

