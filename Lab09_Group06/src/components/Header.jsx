import React from 'react';

function Header() {
  return (
    <div className="header-section">
      <div className="breadcrumb">
        หน้าหลัก &nbsp; &gt; &nbsp; สินค้าของฉัน &nbsp; &gt; &nbsp; <span style={{color: '#fff'}}>ลงประกาศ</span>
      </div>
      <h1 className="page-title">
        ลงประกาศ<span className="highlight">ขายสินค้า</span>
      </h1>
    </div>
  );
}

export default Header;