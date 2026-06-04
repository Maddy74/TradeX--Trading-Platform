import "./App.css";

import HomePage from "./landing_page/home/HomePage.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound.jsx";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Use Landing Signup Page
import SignUp from "./landing_page/signup/SignUp.jsx";

//Login Page
import Login from "./pages/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Landing Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />

        {/* ✅ Authentication Routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
