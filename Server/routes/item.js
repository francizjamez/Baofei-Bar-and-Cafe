const router = require("express").Router();
const { getItems, addItem } = require("../controllers/item.js");

router.get("/", getItems);
router.post("/add", addItem);

module.exports = router;
