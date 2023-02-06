const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.use("/css", express.static(path.join(__dirname, "css")));
app.set('views', path.join(__dirname, "view"));
app.get('/', (req, res) => {
    const date = new Date();
    res.render("index", {
        time: date.toTimeString(),
        css: date.getHours() > 6 && date.getHours() < 18 ? "css/day.css" : "css/night.css"
    });
});
app.listen(3000);