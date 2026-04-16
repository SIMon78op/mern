const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//db// 
const { users } = require("./db");

//APIs//


app.listen(PORT, () => {
    console.log("server is running on PORT:", PORT);
});