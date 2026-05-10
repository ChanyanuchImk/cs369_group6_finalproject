import React, { useState } from "react";
import "../styles/Detail.css";
import backIcon from "../assets/back.png";
import { useNavigate } from "react-router-dom";

function ReviewSeller({ goBack }) {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      {/* ปุ่มย้อนกลับ */}
      <div className="back-arrow" onClick={() => navigate('/product-detail')}>
        <img src={backIcon} alt="back" />
      </div>

      <div className="review-container">
        {/* แถวบน */}
        <div className="review-top">
          <button className="review-btn-main">ให้คะแนนผู้ขาย</button>
          <h3 className="product-name">ลำไย อร่อยมาก</h3>
        </div>

        <p className="review-text">เขียนรีวิวตรงนี้เลย</p>

        {/* ดาว */}
        <div className="stars">
          {[1,2,3,4,5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "star active" : "star"}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        {/* กล่องเขียนรีวิว */}
        <textarea className="review-box" placeholder="เขียนรีวิว..." />

        {/* รีวิวคนอื่น */}
        <p className="other-review">รีวิวของผู้ซื้อท่านอื่น</p>

        <div className="review-card">
          <b>สมศรี ลีสมาน</b> ⭐⭐⭐⭐⭐
          <p>บริการยอดเยี่ยม แม่ค้าที่จริงใจสุดๆ ส่งไวมากๆ มีของแถมให้ด้วยค่</p>
        </div>

        <div className="review-card">
          <b>วนิทรา เอี่ยมดี</b> ⭐⭐⭐⭐⭐
          <p>ส่งเร็วมาก พูดเพราะสุดๆ พูดคุยง่าย ใจดี ของแท้แน่นอน</p>
        </div>
      </div>
    </>
  );
}

export default ReviewSeller;