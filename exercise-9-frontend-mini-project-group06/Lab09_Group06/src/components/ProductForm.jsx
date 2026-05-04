import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import ImageUpload from './ImageUpload';
import '../post.css';

function ProductForm() {
  const categories = [
    "เสื้อผ้า", "รองเท้า", "เครื่องประดับ", "ความงามและของใช้ส่วนตัว",
    "กระเป๋า", "นาฬิกาและแว่นตา", "อุปกรณ์อิเล็กทรอนิกส์",
    "เครื่องใช้ในบ้าน", "หนังสือ", "อื่นๆ"
  ];
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productName: "",
    price1: "",
    price2: "",
    price3: "",
    description: "",
    place: "",
    contact: ""
  });

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>

      <div className="product-page">

        <form className="main-grid" onSubmit={handleSubmit}>
          {/* LEFT */}
          <div className="column-left">
            <ImageUpload />

            <section className="card">
              <h3>ราคาสินค้า</h3>
              <div className="line"></div>

              <div className="price-row">
                {[1, 2, 3].map((num) => (
                  <div className="input-group" key={num}>
                    <label>ราคาขาย</label>
                    <input
                      type="number"
                      id={`price${num}`}
                      placeholder="0"
                      value={formData[`price${num}`]}
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
              </div>
            </section>

            <section className="card">
              <h3>วิธีการรับสินค้า</h3>
              <div className="line"></div>

              <div className="input-group">
                <label>รายละเอียดการนัดรับ</label>
                <input
                  type="text"
                  id="place"
                  placeholder="เช่น ใต้ตึก SC3 หรือ Kave TU"
                  value={formData.place}
                  onChange={handleInputChange}
                />
              </div>
            </section>
          </div>

          {/* RIGHT */}
          <div className="column-right">
            <section className="card">
              <h3>ข้อมูลสินค้า</h3>
              <div className="line"></div>

              <div className="input-group">
                <label>ชื่อสินค้า</label>
                <input
                  type="text"
                  id="productName"
                  placeholder="ระบุชื่อสินค้าของคุณ"
                  value={formData.productName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="category-section">
                <label style={{ fontSize: '0.9rem', color: '#555' }}>
                  หมวดหมู่สินค้า
                </label>

                <div className="category-tags">
                  {categories.map((cat) => (
                    <span
                      key={cat}
                      className={`tag ${selectedCategory === cat ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="input-group" style={{ marginTop: '15px' }}>
                <label>รายละเอียดสินค้า</label>
                <textarea
                  id="description"
                  rows="5"
                  placeholder="กรอกรายละเอียดสินค้าเพิ่มเติม"
                  value={formData.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </section>

            <section className="card">
              <h3>ช่องทางติดต่อผู้ขาย</h3>
              <div className="line"></div>

              <input
                type="text"
                id="contact"
                placeholder="Line ID / เบอร์โทรศัพท์"
                value={formData.contact}
                onChange={handleInputChange}
              />
            </section>

            <div className="action-buttons">
              <button type="submit" className="btn-primary" onClick={() => navigate('/fav')}>เผยแพร่ประกาศ</button>
              <button type="button" className="btn-secondary">บันทึกแบบร่าง</button>
              <button type="button" className="btn-cancel" onClick={() => navigate('/')}>ยกเลิก</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProductForm;