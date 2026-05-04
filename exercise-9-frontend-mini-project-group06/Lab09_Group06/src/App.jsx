import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HomeLogin from "./components/Homelogin";
import Login from "./components/Login";
import Register from "./components/Register";
import VerifyPhone from "./components/VerifyPhone";
import VerifyPage from "./components/VerifyPage";
import SuccessPage from "./components/SuccessPage";
import ProductForm from "./components/ProductForm";
import EditProduct from "./components/EditProduct";

import ProductDetail from "./components/ProductDetail";
import ReviewSeller from "./components/ReviewSeller";

import Marketplace from "./components/Marketplace";
import Favproduct from "./components/Favproduct";
import SubHeader from "./components/SubHeader";

function App() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState(null);

  return (
    <BrowserRouter>
      <Routes>

        {/* ===== HOME ===== */}
        <Route path="/" element={<Home />} />

        {/* ===== AUTH ===== */}
        <Route path="/login" element={<Login />} />
        <Route path="/home-login" element={<HomeLogin />} />

        <Route
          path="/register"
          element={
            <>
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

        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/success" element={<SuccessPage />} />

        {/* ===== MAIN ===== */}
        <Route
          path="/marketplace"
          element={
            <>
              <Navbar />
              <Marketplace />
            </>
          }
        />

        <Route
          path="/fav"
          element={
            <>
              <Navbar />
              <SubHeader title="คลังของฉัน" />
              <Favproduct />
            </>
          }
        />

        {/* ===== PRODUCT ===== */}
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <PageHeader title="ลงประกาศ" />
              <main className="container">
                <ProductForm />
              </main>
            </>
          }
        />

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

        <Route
          path="/product-detail"
          element={
            <>
              <Navbar />
              <ProductDetail />
            </>
          }
        />

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

// Header
const PageHeader = ({ title }) => (
  <div className="header-section">
    <div className="breadcrumb">
      หน้าหลัก &gt; สินค้าของฉัน &gt; <span>{title}</span>
    </div>
    <h1 className="page-title">
      {title} <span className="highlight">ขายสินค้า</span>
    </h1>
  </div>
);

export default App;