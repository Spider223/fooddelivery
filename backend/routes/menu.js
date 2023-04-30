const express = require("express");
const router = express.Router();

const { menuList } = require("../controllers/menu");

router.route("/menulist").post(menuList);

module.exports = router;
