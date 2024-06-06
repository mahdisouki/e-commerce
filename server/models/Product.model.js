const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String, required: true },
  prix: { type: Float32Array, required: true },
  stock: { type: Number, required: true }
  
});

module.exports = mongoose.model("Product", ProductSchema);