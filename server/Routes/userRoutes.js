const express = require("express");
const router = express.Router();
const projectControllers = require("../Controllers/userControllers");

router.route("/addprojects").post(projectControllers.addprojects);
router.route("/viewprojects").get(projectControllers.viewprojects);
router.route("/deleteprojects/:id").delete(projectControllers.deleteprojects);

module.exports = router;

