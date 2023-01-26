const express = require("express");

const routes = require('./routes')
const config = require("./configs/config");
const { viewEngine } = require("./configs/tempEngine");


const app = express();
viewEngine(app);

app.use(express.static("src/static"));
app.use(express.urlencoded({extended: false}));
app.use(routes)

app.listen(config.PORT, () => console.log(`Server is Running on PORT:${config.PORT}`));
