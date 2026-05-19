const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

router.get("/:sellerId", reviewController.getReviewsBySeller);
router.post("/", reviewController.createReview);
router.delete("/:reviewId", reviewController.deleteReview);

module.exports = router;