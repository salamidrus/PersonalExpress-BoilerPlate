const router = require("express").Router();
const { ModelController } = require("../controllers/controller");

router.get("/", ModelController);

module.exports = router;
