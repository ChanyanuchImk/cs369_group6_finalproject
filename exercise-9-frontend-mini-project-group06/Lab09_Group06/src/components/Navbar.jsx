import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo"><h1>TU MARKET PLACE</h1></div>
      <ul className="nav-links">
        <li onClick={() => navigate('/')}>หน้าหลัก</li>
        <li onClick={() => navigate('/marketplace')}>เลือกซื้อสินค้า</li>
        <li onClick={() => navigate('/products')}>ลงขายสินค้า</li>
        <li onClick={() => navigate('/fav')}>คลังของฉัน</li>
      </ul>
      <div className="profile-icon" style={{fontSize: '1.5rem', cursor: 'pointer'}}>👤</div>
    </nav>
  );
}

export default Navbar;