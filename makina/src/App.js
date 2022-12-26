import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AllProducts from "./components/products/AllProducts";
import Section from "./components/Section";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<AllProducts />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/annoucement" element={<Announcement />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
