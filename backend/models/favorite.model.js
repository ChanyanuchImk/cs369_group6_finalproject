const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  fav_id: {
    type: String,
    required: true,
    unique: true
  },

  user_id: String,
  product_id: String

}, {
  timestamps: true
});

module.exports = mongoose.model("Favorite", favoriteSchema);