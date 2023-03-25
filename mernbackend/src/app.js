const express = require("express");
const app = express();
const hbs = require("hbs");
require('./db/conn');
const path = require("path");
const port = process.env.PORT || 8000;
// view path
const viewPath = path.join(__dirname, "../mernbackend/views");

// path added on html static form
// const static_path = path.join(__dirname, "../public");
// app.use(express.static(static_path));


// on hbs file
app.set("views", viewPath);
app.set("view engine", "hbs");
// app declare
app.get("/", (req, res) => {
    res.render("index");
});

// poort declare
app.listen(port, () => {
    console.log(`${port} connection deone!!`);
});