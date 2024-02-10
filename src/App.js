import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer/Footer";
import men_banners from "./Components/Assets/banner_mens.png";
import women_banners from "./Components/Assets/banner_women.png";
import kids_banners from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}  />
          <Route path="/kids" element={<Category banners={kids_banners} category='kids' />}  />
          <Route path="/men" element={<Category banners={men_banners} category='men' />}  />
          <Route path="/women" element={<Category banners={women_banners} category='women' />}  />
          <Route path="/unisex" element={<Category banners={men_banners} category='men' />}  />
          <Route path="/contact" element={<Contact />}  />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
