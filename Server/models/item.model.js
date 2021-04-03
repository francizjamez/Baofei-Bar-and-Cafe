const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema(
  {
    itemName: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number },
    img: { type: String },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
