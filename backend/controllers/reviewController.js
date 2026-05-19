const Review = require("../models/review.model");

// ดูรีวิวทั้งหมดของ seller
exports.getReviewsBySeller = async (req, res) => {
  try {
    const reviews = await Review.find({ seller_id: req.params.sellerId }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// เขียนรีวิว
exports.createReview = async (req, res) => {
  try {
    const { seller_id, user_id, score, comment } = req.body;
    if (!seller_id || !user_id || !score) {
      return res.status(400).json({ message: "กรุณาระบุ seller_id, user_id และ score" });
    }

    // ไม่ให้รีวิว seller คนเดิมซ้ำ
    const existing = await Review.findOne({ seller_id, user_id });
    if (existing) return res.status(400).json({ message: "คุณรีวิว seller คนนี้ไปแล้ว" });

    const reviewData = {
      review_id: "REVIEW-" + Date.now(),
      seller_id,
      user_id,
      score,
      comment,
    };

    const review = new Review(reviewData);
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ลบรีวิว
exports.deleteReview = async (req, res) => {
  try {
    const deleted = await Review.findOneAndDelete({ review_id: req.params.reviewId });
    if (!deleted) return res.status(404).json({ message: "ไม่พบรีวิวนี้" });
    res.json({ message: "ลบรีวิวเรียบร้อยแล้ว" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};