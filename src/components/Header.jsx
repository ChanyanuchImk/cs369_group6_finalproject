import React from 'react';

function Header({ title, breadcrumb }) {
  return (
    <div className="header-section">
      <div className="breadcrumb">
        หน้าหลัก &nbsp; &gt; &nbsp; {breadcrumb} &nbsp; &gt; &nbsp; <span style={{color: '#fff'}}>{title}</span>
      </div>
      <h1 className="page-title">
        {title}<span className="highlight">สินค้า</span> 
        {/* หรือถ้าหน้าอื่นไม่อยากให้มีคำว่า "ขายสินค้า" ก็แก้ตรงนี้ครับ */}
      </h1>
    </div>
  );
}

export default Header;