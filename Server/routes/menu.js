const router = require("express").Router();
let Menu = require("../models/menu.model");

router.route("/").get((req, res) => {
  Menu.find()
    .then((menu) => res.json(menu))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const menuName = req.body.menuName;

  const newMenu = new Menu({
    menuName,
  });

  newMenu
    .save()
    .then(() => res.json("Menu added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// router.route("/:id").get((req, res) => {
//   Exercise.findById(req.params.id)
//     .then((exercise) => res.json(exercise))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route("/:id").delete((req, res) => {
//   Exercise.findByIdAndDelete(req.params.id)
//     .then(() => res.json("Exercise deleted."))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route("/update/:id").post((req, res) => {
//   Exercise.findById(req.params.id)
//     .then((exercise) => {
//       exercise.username = req.body.username;
//       exercise.description = req.body.description;
//       exercise.duration = Number(req.body.duration);
//       exercise.date = Date.parse(req.body.date);

//       exercise
//         .save()
//         .then(() => res.json("Exercise updated!"))
//         .catch((err) => res.status(400).json("Error: " + err));
//     })
//     .catch((err) => res.status(400).json("Error: " + err));
// });

module.exports = router;
