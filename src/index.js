const express = require("express");

const config = require("./configs/config");
const {viewEngine} = require("./configs/tempEngine");

const app = express();
viewEngine(app);

app.get("/", (req, res) => {
    res.render('home');
});

app.listen(config.PORT, () => console.log(`Server is Running on PORT:${config.PORT}`));
