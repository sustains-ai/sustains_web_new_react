import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/AboutUs";
import Product from "./components/Product";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import "./App.css";

// Simple NotFound component for invalid routes
const NotFound = () => (
  <div>
    <h1>404 - Page Not Found</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default App;
