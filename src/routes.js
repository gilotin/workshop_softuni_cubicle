const router = require("express").Router();
const cubeController = require('./controllers/cubeController');
const homeController = require("./controllers/homeController");



router.get("/", homeController.getAboutPage);

router.get("/about", homeController.getHomePage);

router.get("/create", cubeController.getCreateCube);


module.exports = router;