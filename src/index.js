const express = require("express");
const cookieParser = require("cookie-parser");

const routes = require("./routes");
const config = require("./configs/config");
const { viewEngine } = require("./configs/tempEngine");
const initDb = require("./configs/dbInit");
const e = require("express");

const app = express();
viewEngine(app);

app.use(express.static("src/static"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

initDb()
    .then(() =>
        app.listen(config.PORT, () => console.log(`Server is Running on PORT:${config.PORT}`))
    )
    .catch((err) => console.error(err));
