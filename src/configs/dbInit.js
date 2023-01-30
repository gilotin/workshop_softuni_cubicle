const mongoose = require('mongoose');

const dbIrl = "mongodb://127.0.0.1/27017/cubicle"

async function initDb(){
    await mongoose.connect(dbIrl);

    console.log('Connected to Database !');
}

module.exports = initDb;