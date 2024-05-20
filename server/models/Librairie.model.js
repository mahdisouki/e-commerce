const mongoose = require("mongoose");

const LibrairieSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String, required: true },
  adresse: { type: String, required: true },
  tel: { type: String, required: true },
  email:{ type: String, required: true }
});

module.exports = mongoose.model("Librairie", LibrairieSchema);