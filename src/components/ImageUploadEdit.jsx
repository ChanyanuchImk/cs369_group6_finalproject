import React from 'react';
import shoeImage from '../assets/crocs.png';
import shoeImage1 from '../assets/crocs1.png';

function ImageUploadEdit() {
  return (
    <section className="card">
      <h3>รูปภาพสินค้า <span style={{fontSize: '0.8rem', color: '#888', fontWeight: 'normal'}}>อัปโหลดได้สูงสุด 5 รูป</span></h3>
      <div className="line"></div>
      <div className="image-upload-area" style={{justifyContent: 'flex-start', gap: '20px'}}>
        
        {/* รูปหลัก / ภาพปก - เปลี่ยนมาใช้ shoeImage */}
        <div className="main-image-container" style={{position: 'relative'}}>
            <div className="badge-cover" style={{position: 'absolute', top: '10px', left: '10px', background: '#c88d32', color: 'white', padding: '2px 10px', borderRadius: '10px', fontSize: '0.7rem', zIndex: 1}}>ภาพปก</div>
            <img 
              src={shoeImage}  /* ใช้ตัวแปรที่ import มา */
              alt="main" 
              style={{width: '200px', height: '200px', objectFit: 'cover', borderRadius: '10px', border: '1px solid #e8d5b5'}} 
            />
        </div>
        
        {/* รูปย่อย - เปลี่ยนรูปแรกมาใช้ shoeImage1 */}
        <div className="sub-uploads" style={{gridTemplateColumns: 'repeat(2, 1fr)', display: 'grid', gap: '10px'}}>
            <div className="sub-box-image" style={{width: '80px', height: '80px'}}>
                <img 
                  src={shoeImage1} /* ใช้ตัวแปรที่ import มา */
                  alt="sub" 
                  style={{width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover', border: '1px solid #e8d5b5'}} 
                />
            </div>
            
            {/* ช่องอื่นๆ ที่ยังไม่มีรูป */}
            <div className="sub-box">+ <br/><span style={{fontSize: '0.5rem'}}>รูปที่ 2</span></div>
            <div className="sub-box">+ <br/><span style={{fontSize: '0.5rem'}}>รูปที่ 3</span></div>
            <div className="sub-box">+ <br/><span style={{fontSize: '0.5rem'}}>รูปที่ 4</span></div>
        </div>
      </div>
    </section>
  );
}

export default ImageUploadEdit;