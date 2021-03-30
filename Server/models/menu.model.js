const mongoose = require("mongoose");
const { Schema } = mongoose;

const menuSchema = new Schema(
  {
    menuName: { type: String, required: true, unique: true },
    img: { type: String },
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
