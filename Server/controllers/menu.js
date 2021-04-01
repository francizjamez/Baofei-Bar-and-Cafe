const Menu = require("../models/menu.model");

const getMenu = (req, res) => {
  Menu.find()
    .then((menu) => res.json(menu))
    .catch((err) => res.status(400).json("Error: " + err));
};

const addMenu = (req, res) => {
  const menuName = req.body.menuName;
  const img = req.body.img;
  const newMenu = new Menu({
    menuName,
    img,
  });

  newMenu
    .save()
    .then(() => res.json("Menu added!"))
    .catch((err) => {
      res.status(400).json("Error: " + err);
      console.log(req.body.menuName);
      console.log(img);
    });
};

module.exports = { getMenu, addMenu };
