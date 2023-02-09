const Cube = require("../models/Cube");
const Accessory = require("../models/Accessory");
const cubeService = require("../services/cubeService");
const cubeUtils = require("../utils/cubeUtils");


exports.getCreateCube = (req, res) => {
    console.log("req.user");
    console.log(req.user);
    res.render("create");
};

exports.postCreateCube = async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;

    let cube = new Cube({ name, description, imageUrl, difficultyLevel });

    await cube.save();

    res.redirect("/");
};

exports.getCubeDetails = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).populate("accessories").lean();

    if (!cube) {
        return res.redirect("/404");
    }

    res.render("cube/details", { cube });
};

exports.getAttachAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessory = await Accessory.find({ _id: { $nin: cube.accessories } }).lean();
    console.log(accessory);
    res.render("cube/attach", { cube, accessory });
};

exports.postAttachAccessories = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId);
    const accessoryId = req.body.accessory;
    cube.accessories.push(accessoryId);

    await cube.save();

    res.redirect(`/cubes/${cube._id}/details`);
};

exports.getEditCube = async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId);

    const difficultyLevels = cubeUtils.generateDiffLevel(cube.difficultyLevel);
    res.render("cube/edit", { cube, difficultyLevels });
};

exports.getDeleteCube = async (res, req) => {
    const cube = await cubeService.getOne(req.params.cubeId);

    const difficultyLevels = cubeUtils.generateDiffLevel(cube.difficultyLevel);

    res.render("cube/delete", { cube, difficultyLevels });
};


