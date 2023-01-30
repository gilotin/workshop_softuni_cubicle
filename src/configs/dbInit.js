const mongoose = require('mongoose');

const dbIrl = "mongodb://localhost:27017/cubicle"

async function initDb(){
    mongoose.set('strictQuery', false)
    await mongoose.connect(dbIrl);

    console.log('Connected to Database !');
}

module.exports = initDb;