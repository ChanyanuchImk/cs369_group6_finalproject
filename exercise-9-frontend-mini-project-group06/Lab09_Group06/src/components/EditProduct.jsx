import React, { useState } from 'react';
import ImageUploadEdit from './ImageUploadEdit'; // สร้างแยกเพื่อแสดงรูปที่มีอยู่แล้ว
import { useNavigate } from 'react-router-dom';

function EditProduct() {
    const categories = ["เสื้อผ้า", "รองเท้า", "เครื่องประดับ", "ความงามและของใช้ส่วนตัว", "กระเป๋า", "นาฬิกาและแว่นตา", "อุปกรณ์อิเล็กทรอนิกส์", "เครื่องใช้ในบ้าน", "หนังสือ", "อื่นๆ"];
    const navigate = useNavigate();

    // สมมติว่านี่คือข้อมูลเดิมที่ดึงมาจาก Database
    const [selectedCategory, setSelectedCategory] = useState("รองเท้า");
    const [formData, setFormData] = useState({
        productName: "Crocs Classic Clog Size M7/W9",
        price: "1,500",
        currency: "บาท",
        unit: "คู่",
        description: "รองเท้า ยี่ห้อ Crocs Classic Clog Size M7/W9 สีเทาอ่อน สภาพดีมาก เหมือนใหม่ ซื้อจากช้อปเซ็นทรัลเวิลด์ มีใบเสร็จ",
        place: "ส่งฟรีรอบ ม.ธรรมศาสตร์ รังสิต / นอกเขต ม.ธรรมศาสตร์ +30 บาท",
        contact: "IG: dd.stores04"
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    return (
        <form className="main-grid">
            {/* Column Left */}
            <div className="column-left">
                {/* ส่วนรูปภาพ - ในที่นี้ใช้ Component ImageUploadEdit ที่เราจะสร้างต่อข้างล่าง */}
                <ImageUploadEdit />

                <section className="card">
                    <h3>ราคาสินค้า</h3>
                    <div className="line"></div>
                    <div className="price-row">
                        <div className="input-group">
                            <label>ราคาขาย</label>
                            <input type="text" id="price" value={formData.price} onChange={handleInputChange} />
                        </div>
                        <div className="input-group">
                            <label>สกุลเงิน</label>
                            <input type="text" id="currency" value={formData.currency} onChange={handleInputChange} />
                        </div>
                        <div className="input-group">
                            <label>หน่วย</label>
                            <input type="text" id="unit" value={formData.unit} onChange={handleInputChange} />
                        </div>
                    </div>
                </section>

                <section className="card">
                    <h3>วิธีการรับสินค้า</h3>
                    <div className="line"></div>
                    <div className="input-group">
                        <label>รายละเอียดการจัดรับ</label>
                        <input type="text" id="place" value={formData.place} onChange={handleInputChange} />
                    </div>
                </section>
            </div>

            {/* Column Right */}
            <div className="column-right">
                <section className="card">
                    <h3>ข้อมูลสินค้า</h3>
                    <div className="line"></div>
                    <div className="input-group">
                        <label>ชื่อสินค้า</label>
                        <input type="text" id="productName" value={formData.productName} onChange={handleInputChange} />
                    </div>
                    <div className="category-section">
                        <label>หมวดหมู่สินค้า</label>
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
                    <div className="input-group" style={{marginTop:'10px'}}>
                        <label>รายละเอียดสินค้า</label>
                        <textarea id="description" rows="5" value={formData.description} onChange={handleInputChange}></textarea>
                    </div>
                </section>

                <section className="card">
                    <h3>ช่องทางติดต่อผู้ขาย</h3>
                    <div className="line : "></div>
                    <div className="input-group">
                        <label>ช่องทางติดต่อ</label>
                        <input type="text" id="contact" value={formData.contact} onChange={handleInputChange} />
                    </div>
                </section>

                {/* ส่วนปุ่มกดที่เปลี่ยนไปตามรูป */}
                <div className="action-buttons">
                    <button type="submit" className="btn-primary" style={{backgroundColor: '#c88d32'}} onClick={() => navigate('/fav')}>แก้ไขประกาศ</button>
                    <button type="button" className="btn-secondary" style={{color: '#28a745', borderColor: '#28a745'}}>ขายแล้ว</button>
                    <button type="button" className="btn-cancel">ยกเลิก</button>
                </div>
            </div>
        </form>
    );
}

export default EditProduct;