const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  review_id: {
    type: String,
    required: true,
    unique: true
  },

  seller_id: String,
  user_id: String,

  score: {
    type: Number,
    min: 1,
    max: 5
  },

  comment: String

}, {
  timestamps: true
});

module.exports = mongoose.model("Review", reviewSchema);