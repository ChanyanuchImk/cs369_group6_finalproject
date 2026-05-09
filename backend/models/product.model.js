const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true,
    unique: true
  },
  seller_id: String,
  product_name: String,
  product_category: String,
  product_description: String,
  product_price: Number,
  product_currency: String,
  product_unit: Number,

  product_images: [String],

  product_pickup: String,
  product_contact: String,

  product_status: {
    type: String,
    enum: ["available", "sold", "hidden"],
    default: "available"
  }

}, {
  timestamps: true
});

module.exports = mongoose.model("Product", productSchema);