const Cube = require("../models/Cube");
const db = require("../db.json");

exports.getCreateCube = (req, res) => {
    res.render("create");
};

exports.postCreateCube = (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;

    const id = Math.random() * 10 + Math.random() * 0.0001;
    let cube = new Cube(id, name, description, imageUrl, difficultyLevel);

    Cube.save(cube);

    res.redirect("/");
};

exports.getCubeDetails = (req, res) => {
    let cubeId = Number(req.params.cubeId);

    if (!cubeId) {
        return res.redirect("404");
    }
    let cube = db.cubes.find((x) => x.id == cubeId);

    if (!cube) {
        return res.redirect("404");
    }

    res.render("details", { cube });
};
