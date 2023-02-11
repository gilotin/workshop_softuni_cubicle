const Cube = require("../models/Cube");

exports.getOne = (cubeId) => Cube.findById(cubeId).lean();

exports.update = (cubeId, data) => Cube.findByIdAndUpdate(cubeId, data).lean();