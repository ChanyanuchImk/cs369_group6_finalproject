import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Favproduct.css";

import pf from "../assets/pf.png";
import pdr from "../assets/pdr.png";
import phone from "../assets/phone.png";
import crocs from "../assets/crocs.png";

const productsFavorite = [
  { id: 1, name: "Dior Perfume Blooming Bouquet", price: "4,500 บาท/ชิ้น", seller: "Liz", rating: 5, reviews: 22, img: pf },
  { id: 2, name: "Pandora Bracelet Rose Gold size 17", price: "1,790 บาท/ชิ้น", seller: "กันดา", rating: 5, reviews: 7, img: pdr },
];

const myProducts = [
  { id: 3, name: "IPhone 14 Pro max 512 GB สี Space Black", price: "28,500 บาท/ชิ้น", seller: "บานี", rating: 5, reviews: 45, img: phone },
  { id: 4, name: "Crocs Classic Clog Size M7/W9", price: "1,500 บาท/คู่", seller: "ดีดา", rating: 5, reviews: 138, img: crocs },
];

const StarRating = ({ rating }) => {
  return (
    <span className="fav-stars">
      {"★".repeat(rating)}{"☆".repeat(5 - rating)}
    </span>
  );
};

const Card = ({ product, isOwner }) => {
  const navigate = useNavigate();

  return (
    <div className="fav-card">
      <div className="fav-card-img-wrapper">
        <img src={product.img} alt={product.name} className="fav-card-img" />
      </div>
      <div className="fav-card-body">
        <p className="fav-product-name">{product.name}</p>
        <p className="fav-seller">
          ขายโดย {product.seller}&nbsp;
          <StarRating rating={product.rating} />
          <span className="fav-reviews"> ({product.reviews})</span>
        </p>
        <p className="fav-price">{product.price}</p>
        <div className="fav-btn-group">
          {isOwner ? (
            <button className="fav-btn-primary" onClick={() => navigate("/edit")}>
              แก้ไข
            </button>
          ) : (
            <>
              <button className="fav-btn-primary" onClick={() => navigate("/product-detail")}>
                ดูเพิ่มเติม
              </button>
              <button className="fav-btn-secondary">
                <span className="fav-heart">♥</span> รายการโปรด
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Favproduct = () => {
  return (
    <div className="fav-page">
      {/* ลบส่วน Top Bar ออกไปแล้ว */}

      {/* Main Content */}
      <div className="fav-main">
        {/* รายการโปรด */}
        <div className="fav-section">
          <p className="fav-section-label">รายการโปรด</p>
          <div className="fav-container-box">
            <div className="fav-scroll">
              {productsFavorite.map((item) => (
                <Card key={item.id} product={item} isOwner={false} />
              ))}
            </div>
          </div>
        </div>

        {/* สินค้าของฉัน */}
        <div className="fav-section">
          <p className="fav-section-label">สินค้าของฉัน</p>
          <div className="fav-container-box">
            <div className="fav-scroll">
              {myProducts.map((item) => (
                <Card key={item.id} product={item} isOwner={true} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favproduct;