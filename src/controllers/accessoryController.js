const router = require("express").Router();
const Accessory = require("../models/Accessory");

router.get("/create", (req, res) => {
    res.render("accessory/create");
});

router.post("/create", async (req, res) => {
    const { name, description, imageUrl } = req.body;

    try {
        // await Accessory.create({ name, description, imageUrl })   <-- both are the same;
        const accessory = new Accessory({ name, description, imageUrl });
        await accessory.save();
        res.redirect("/");
    } catch (err) {
        console.log(err.message);
        return res.redirect("/404");npm 
    }
});

module.exports = router;
