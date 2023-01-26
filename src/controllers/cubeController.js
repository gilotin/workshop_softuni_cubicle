const Cube = require("../models/Cube");

exports.getCreateCube = (req, res) => {
    res.render("create");
};

exports.postCreateCube = (req, res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body;
    
    const id = Math.random()*10 + Math.random()*0.0001;
    let cube = new Cube(id,name, description, imageUrl, difficultyLevel );

    Cube.save(cube);

    res.redirect("/");
};
