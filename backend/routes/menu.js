const express = require("express");
const router = express.Router();

const { menuList } = require("../controllers/menu");

// router.route("/menulist").post(menuList);
router.route("/menulist").get(menuList);

module.exports = router;
