const Menu = require("../models/menu.model");

const getMenu = (req, res) => {
  Menu.find()
    .then((menu) => res.json(menu))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = { getMenu };
