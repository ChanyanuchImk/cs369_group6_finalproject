const Favorite = require("../models/favorite.model");

// ดู favorites ทั้งหมดของ user
exports.getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ user_id: req.params.userId }).sort({ createdAt: -1 });
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// เพิ่ม favorite
exports.addFavorite = async (req, res) => {
  try {
    const { user_id, product_id } = req.body;
    if (!user_id || !product_id) {
      return res.status(400).json({ message: "กรุณาระบุ user_id และ product_id" });
    }

    // เช็คว่า favorite ซ้ำหรือเปล่า
    const existing = await Favorite.findOne({ user_id, product_id });
    if (existing) return res.status(400).json({ message: "สินค้านี้อยู่ใน favorites แล้ว" });

    const favData = {
      fav_id: "FAV-" + Date.now(),
      user_id,
      product_id,
    };

    const favorite = new Favorite(favData);
    const newFav = await favorite.save();
    res.status(201).json(newFav);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ลบ favorite
exports.removeFavorite = async (req, res) => {
  try {
    const deleted = await Favorite.findOneAndDelete({ fav_id: req.params.favId });
    if (!deleted) return res.status(404).json({ message: "ไม่พบ favorite นี้" });
    res.json({ message: "ลบ favorite เรียบร้อยแล้ว" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};