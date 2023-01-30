const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,

    },
    description: {
        type: String,
        maxLength: 50
    },
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;