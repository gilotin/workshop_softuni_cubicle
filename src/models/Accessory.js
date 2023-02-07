const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        match: [/^http[s]?:\/\//, 'URL is invalid!'],

    },
    description: {
        type: String,
        maxLength: 500
    },
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;