import React from "react";
import "../Favproduct.css";
import pf from "../assets/pf.png";
import pdr from "../assets/pdr.png";
import phone from "../assets/phone.png";
import crocs from "../assets/crocs.png";
import { useNavigate } from "react-router-dom";


const productsFavorite = [
  {
    id: 1,
    name: "Dior Perfume Blooming Bouquet",
    price: "4,500 บาท/ชิ้น",
    img: pf,
  },
  {
    id: 2,
    name: "Pandora Bracelet Rose Gold size 17",
    price: "1,790 บาท/ชิ้น",
    img: pdr,
  },
];

const myProducts = [
  {
    id: 3,
    name: "iPhone 14 Pro max 512 GB สี Space Black",
    price: "28,500 บาท/ชิ้น",
    img: phone,
  },
  {
    id: 4,
    name: "Crocs Classic Clog Size M7/W9",
    price: "1,500 บาท/คู่",
    img: crocs,
  },
];

const Card = ({ product, isOwner }) => {
  const navigate = useNavigate();

  return (
    <div className="fav-card">
      <img src={product.img} alt={product.name} className="fav-card-img" />
      <h4>{product.name}</h4>
      <p className="fav-price">{product.price}</p>

      <div className="fav-button-group">
       {isOwner ? (
        <button 
            className="fav-primary-btn" 
            onClick={() => navigate('/edit')}
        >
            แก้ไข
        </button>
        ) : (
        <button 
            className="fav-primary-btn" 
            onClick={() => navigate('/product-detail')}
        >
            ดูเพิ่มเติม
        </button>
        )}
        {!isOwner && (
          <button className="secondary-btn">❤️ รายการโปรด</button>
        )}
      </div>
    </div>
  );
};

const Marketplace = () => {
  return (
    <div className="fav-container">


    <div className="fav-grid">
        <div className="fav-box fav-favorite">
          <h3>รายการโปรด</h3>
          {productsFavorite.map((item) => (
            <Card key={item.id} product={item} isOwner={false} />
          ))}
        </div>

        {/* My products */}
        <div className="fav-box fav-my-products">
          <h3>สินค้าของฉัน</h3>
          {myProducts.map((item) => (
            <Card key={item.id} product={item} isOwner={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;