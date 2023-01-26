const Cube = require("../models/Cube");

exports.getCreateCube = (req, res) => {
    res.render("create");
};

exports.postCreateCube = (req, res) => {
    const { name, description, difficultlyLevel, imageUr } = req.body;
    
    let cube = new Cube(name, description, difficultlyLevel, imageUr );

    Cube.save(cube);

    res.redirect("/");
};
