import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LoginNavbar from "./components/NavbarLogin";
import RegisterNavbar from "./components/NavbarRegister";
import HomeNavbar from './components/NavbarHome';

import Home from "./pages/Home";
import HomeLogin from "./pages/Homelogin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyPhone from "./pages/VerifyPhone";
import VerifyPage from "./pages/VerifyPage";
import SuccessPage from "./pages/SuccessPage";

import ProductForm from "./pages/ProductForm";
import EditProduct from "./pages/EditProduct";

import ProductDetail from "./pages/ProductDetail";
import ReviewSeller from "./pages/ReviewSeller";

import Marketplace from "./pages/Marketplace";
import Favproduct from "./pages/Favproduct";

function App() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState(null);

  return (
    <BrowserRouter>
      <Routes>

        {/* ===== HOME ===== */}
        <Route path="/" element={
          <>
            <HomeNavbar />
            <Home />
          </>
          } 
        />

        {/* ===== LOGIN ===== */}
        <Route path="/login" element={
            <>
              <RegisterNavbar />
              <Login />
            </>
          }
        />

        {/* ===== HOME LOGIN ===== */}
        <Route
          path="/home-login"
          element={
            <>
              <LoginNavbar />
              <HomeLogin />
            </>
          }
        />

        {/* ===== REGISTER ===== */}
        <Route
          path="/register"
          element={
            <>
              <RegisterNavbar showBackButton={true} />

              {step === 1 && (
                <Register
                  onNext={(data) => {
                    setUserData(data);
                    setStep(2);
                  }}
                />
              )}

              {step === 2 && (
                <VerifyPhone
                  userData={userData}
                  onBack={() => setStep(1)}
                  onFinish={() => alert("สมัครสำเร็จ!")}
                />
              )}
            </>
          }
        />

        {/* ===== VERIFY ===== */}
        <Route
          path="/verify"
          element={
            <>
              <RegisterNavbar showBackButton={true} />
              <VerifyPage />
            </>
          }
        />

        {/* ===== SUCCESS ===== */}
        <Route
          path="/success"
          element={
            <>
              {/* ไม่มีข้อความกลับสู่หน้าหลัก */}
              <RegisterNavbar showBackButton={false} />
              <SuccessPage />
            </>
          }
        />

        {/* ===== MARKETPLACE ===== */}
        <Route
          path="/marketplace"
          element={
            <>
              <Navbar />
              <PageHeader title="เลือกซื้อสินค้า" />
              <main>
                <Marketplace />
              </main>
            </>
          }
        />

        {/* ===== FAVORITE ===== */}
        <Route
          path="/fav"
          element={
            <>
              <Navbar />
              <PageHeader title="คลังของฉัน" />
              <Favproduct />
            </>
          }
        />

        {/* ===== PRODUCT FORM ===== */}
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <PageHeader title="ลงประกาศขายสินค้า" />
              <main>
                <ProductForm />
              </main>
            </>
          }
        />

        {/* ===== EDIT PRODUCT ===== */}
        <Route
          path="/edit"
          element={
            <>
              <Navbar />
              <PageHeader title="แก้ไขประกาศ" />
              <main className="container">
                <EditProduct />
              </main>
            </>
          }
        />

        {/* ===== PRODUCT DETAIL ===== */}
        <Route
          path="/product-detail"
          element={
            <>
              <Navbar />
              <ProductDetail />
            </>
          }
        />

        {/* ===== REVIEW ===== */}
        <Route
          path="/review"
          element={
            <>
              <Navbar />
              <ReviewSeller />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

// ===== HEADER =====
const PageHeader = ({ title }) => (
  <div className="header-section">
    <div className="breadcrumb">
      หน้าหลัก &gt; สินค้าของฉัน &gt; <span>{title}</span>
    </div>

    <h1 className="page-title">
      {title}
    </h1>
  </div>
);

export default App;