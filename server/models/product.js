const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", Product);
