import React from 'react';

function ImageUpload() {
  // ฟังก์ชันคลิกเพื่อเปิดไฟล์ Browser
  const handleMainUploadClick = () => {
    document.getElementById('file-input').click();
  };

  return (
    <section className="card">
      <h3>รูปภาพสินค้า <span style={{fontSize: '0.8rem', color: '#888', fontWeight: 'normal'}}>อัปโหลดได้สูงสุด 5 รูป</span></h3>
      <div className="line"></div>
      <div className="image-upload-area">
        <div className="main-upload" onClick={handleMainUploadClick}>
          <span style={{fontSize: '2rem'}}>📷</span>
          <p style={{fontSize: '0.8rem', textAlign: 'center'}}>คลิกเพื่ออัปโหลดภาพหลัก</p>
          <input type="file" id="file-input" hidden />
        </div>
        <div className="sub-uploads">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="sub-box">+</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImageUpload;