const router = require("express").Router();
const Accessory = require("../models/Accessory");

router.get("/create", (req, res) => {
    res.render("accessory/create");
});

router.post("/create", async (req, res) => {
    console.log(req.body);
    const { name, description, imageUrl } = req.body;

    // await Accessory.create({ name, description, imageUrl })   <-- both are the same;
    const accessory = new Accessory({ name, description, imageUrl });
    await accessory.save();

    res.redirect("/");
});

module.exports = router;
