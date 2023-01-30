const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50, //check length  
    },
    imageUrl: {
        type: String,
        required: true,
        //Add http:// validation
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1,
    },
});

const Cube = mongoose.model("Cube", cubeSchema);

module.exports = Cube;

