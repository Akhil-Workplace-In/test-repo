const express = require("express");
const app = express();
const PORT = 3000;


app.listen(PORT, (err) => {
    console.log("App is listening on PORT: " + PORT);
})