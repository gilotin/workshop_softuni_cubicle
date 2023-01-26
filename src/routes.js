const router = require("express").Router();
const cubeController = require("./controllers/cubeController");
const homeController = require("./controllers/homeController");



router.get("/", homeController.getHomePage);
router.get("/create", cubeController.getCreateCube);
router.post("/create", cubeController.postCreateCube);
router.get("/details/:cubeId", cubeController.getCubeDetails);
router.get("/about", homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);

module.exports = router;
