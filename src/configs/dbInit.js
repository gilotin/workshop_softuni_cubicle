const mongoose = require("mongoose");
const config = require("./config");

async function initDb() {
    mongoose.set("strictQuery", false);
    await mongoose.connect(config.DB_URI);

    console.log("Connected to Database !!!");
}

module.exports = initDb;
