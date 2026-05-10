import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import logo from '../assets/logo-long.png';
import icon from '../assets/profileicon.png';

import '../styles/Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <nav className="navbar">

      {/* LEFT */}
      <div
        className="navbar-left"
      >
        <img
          src={logo}
          alt="TU MARKET PLACE"
        />
      </div>

      {/* CENTER */}
      <ul className="navbar-menu">
      <li
        className={location.pathname === '/' ? 'active' : ''}
        onClick={() => navigate('/')}
      >
        หน้าหลัก
      </li>

        <li onClick={() => navigate('/marketplace')}>
          เลือกซื้อสินค้า
        </li>

        <li onClick={() => navigate('/products')}>
          ลงขายสินค้า
        </li>

        <li onClick={() => navigate('/fav')}>
          คลังของฉัน
        </li>
      </ul>

      {/* RIGHT */}
      <div
        className="navbar-right"
        ref={dropdownRef}
      >
        <img
          src={icon}
          alt="profile"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />

        {dropdownOpen && (
          <div className="dropdown-menu">
            <button
              className="dropdown-item logout"
              onClick={handleLogout}
            >
              ออกจากระบบ
            </button>
          </div>
        )}
      </div>

    </nav>
  );
}

export default Navbar;