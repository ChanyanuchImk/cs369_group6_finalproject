import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageUploadEdit from '../components/ImageUploadEdit';
import '../styles/post.css';

function EditProduct() {
  const navigate = useNavigate();

  const categories = [
    "เสื้อผ้า", "รองเท้า", "เครื่องประดับ", "ความงามและของใช้ส่วนตัว",
    "กระเป๋า", "นาฬิกาและแว่นตา", "อุปกรณ์อิเล็กทรอนิกส์",
    "เครื่องใช้ในบ้าน", "หนังสือ", "อื่นๆ"
  ];

  const [formData, setFormData] = useState({
    productName: "Crocs Classic Clog Size M7/W9",
    price: "1500",
    currency: "บาท",
    unit: "คู่",
    description: "รองเท้า ยี่ห้อ Crocs Classic Clog Size M7/W9 แท้ มีตำหนิเล็กน้อย",
    place: "ส่งไปรษณีย์ / นัดรับธรรมศาสตร์",
    contact: "IG: dd.stores04",
    category: "รองเท้า"
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="product-page">
      <form className="main-grid">
        <div className="column-left">
          <ImageUploadEdit />

          <section className="card">
            <h3>ราคาสินค้า</h3>
            <div className="line"></div>

            <div className="price-row">
              <div className="input-group">
                <label>ราคาขาย</label>
                <input
                  type="number"
                  id="price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label>สกุลเงิน</label>
                <input
                  type="text"
                  id="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label>หน่วย</label>
                <input
                  type="text"
                  id="unit"
                  value={formData.unit}
                  onChange={handleInputChange}
                />
              </div>
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
                value={formData.place}
                onChange={handleInputChange}
              />
            </div>
          </section>
        </div>

        <div className="column-right">
          <section className="card">
            <h3>ข้อมูลสินค้า</h3>
            <div className="line"></div>

            <div className="input-group">
              <label>ชื่อสินค้า</label>
              <input
                type="text"
                id="productName"
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
                    className={`tag ${formData.category === cat ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, category: cat })}
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
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
          </section>

          <section className="card">
            <h3>ช่องทางติดต่อผู้ขาย</h3>
            <div className="line"></div>

            <input
              type="text"
              id="contact"
              value={formData.contact}
              onChange={handleInputChange}
            />
          </section>

          <div className="action-buttons">
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                alert('บันทึกการแก้ไขเรียบร้อย!');
                navigate('/fav');
              }}
            >
              แก้ไขประกาศ
            </button>

            <button type="button" className="btn-secondary">
              ขายแล้ว
            </button>

            <button
              type="button"
              className="btn-cancel"
              onClick={() => navigate(-1)}
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;