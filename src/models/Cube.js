const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 500, //check length
    },
    imageUrl: {
        type: String,
        required: true,
        //Add http:// validation
        match: [/^http[s]?:\/\//, 'URL is invalid!'],
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1,
    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Accessory"
        },
    ],
});

const Cube = mongoose.model("Cube", cubeSchema);

module.exports = Cube;
