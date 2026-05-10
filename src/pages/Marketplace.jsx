import React, { useState } from "react";
import "../styles/Marketplace.css";
import pf from "../assets/pf.png";
import pdr from "../assets/pdr.png";
import phone from "../assets/phone.png";
import crocs from "../assets/crocs.png";
import duex from "../assets/duex.png"
import plete from "../assets/plete.png"
import { useNavigate } from "react-router-dom";

const products = [
  {
    image: phone,
    title: "iPhone 14 Pro max 512 GB สี Space Black",
    price: "28,500 บาท / ชิ้น",
  },
  {
    image: duex,
    title: "เสื้อ Duex Studio สีขาว แขนยาว",
    price: "220 บาท / ชิ้น",
  },
  {
    image: crocs,
    title: "Crocs Classic Clog",
    price: "1,500 บาท / ชิ้น",
  },
  {
    image: pdr,
    title: "Pandora Bracelet Rose Gold",
    price: "1,790 บาท / ชิ้น",
  },
  {
    image: pf,
    title: "Dior Perfume Blooming Bouquet",
    price: "4,500 บาท / ชิ้น",
  },
  {
    image: plete,
    title: "กระโปรงพลีท นักศึกษา",
    price: "180 บาท / ชิ้น",
  },
];
  const categories = [
    "สินค้าทั้งหมด",
    "เสื้อผ้า",
    "รองเท้า",
    "เครื่องประดับ",
    "ความงามและของใช้ส่วนตัว",
    "กระเป๋า",
    "นาฬิกาและแว่นตา",
    "อุปกรณ์อิเล็กทรอนิกส์",
    "เครื่องใช้ในบ้าน",
    "หนังสือ",
    "อื่นๆ",
];
const Marketplace = () => {
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] =
  useState("สินค้าทั้งหมด");

  return (
   <div className="app">

  <div className="main-layout">
    {/* Sidebar */}
    <aside className="sidebar">
          <h3>หมวดหมู่รายการสินค้า</h3>

          {categories.map((category, index) => (
            <button
              key={index}
              className={
                selectedCategory === category ? "active" : ""
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </aside>

    {/* Products */}
    <main className="products">
      {products.map((item, i) => (
        <div className="card" key={i}>
          <img src={item.image} alt="" />
          <div className="card-body">
            <h4>{item.title}</h4>
            <p className="price">{item.price}</p>

            <div className="btn-group">
              <button className="buy" onClick={() => navigate('/product-detail')}>
                ดูเพิ่มเติม
              </button>
              <button className="fav">
                <span className="fav-heart">♥</span> รายการโปรด
              </button>
            </div>
          </div>
        </div>
      ))}
    </main>
  </div>
</div>
  );
};

export default Marketplace;