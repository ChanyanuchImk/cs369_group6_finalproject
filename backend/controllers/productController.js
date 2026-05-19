const Product = require("../models/product.model");

// ดึงสินค้าทั้งหมด
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ product_status: "available" }).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// เพิ่มสินค้าใหม่
exports.createProduct = async (req, res) => {
  const productData = {
    ...req.body,
    product_id: "PROD-" + Date.now(),
  };
  const product = new Product(productData);
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ดึงสินค้าตาม ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ product_id: req.params.id });
    if (!product) return res.status(404).json({ message: "ไม่พบสินค้า" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// แก้ไขข้อมูลสินค้า
exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.findOneAndUpdate(
      { product_id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "ไม่พบสินค้า" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ลบสินค้า
exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findOneAndDelete({ product_id: req.params.id });
    if (!deleted) return res.status(404).json({ message: "ไม่พบสินค้า" });
    res.json({ message: "ลบสินค้าเรียบร้อยแล้ว" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// เปลี่ยนสถานะสินค้า (available / sold / hidden)
exports.updateProductStatus = async (req, res) => {
  try {
    const { product_status } = req.body;
    const allowedStatus = ["available", "sold", "hidden"];

    if (!allowedStatus.includes(product_status)) {
      return res.status(400).json({ message: "สถานะไม่ถูกต้อง (available, sold หรือ hidden เท่านั้น)" });
    }

    const updated = await Product.findOneAndUpdate(
      { product_id: req.params.id },
      { product_status },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "ไม่พบสินค้า" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};