const Item = require("../models/item.model");

const getItems = (req, res) => {
  Item.find()
    .then((menu) => res.json(menu))
    .catch((err) => res.status(400).json("Error: " + err));
};

const addItem = (req, res) => {
  const newItem = new Item({
    ...req.body,
  });

  newItem
    .save()
    .then(() => res.json("Item added!"))
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
};

module.exports = { getItems, addItem };
