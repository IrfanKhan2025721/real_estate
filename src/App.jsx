import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import About from "./Components/AboutPage/About";
import Property from "./Components/PropertyPage/Property";
import Contact from "./Components/ContactPage/ContactPage";
import Nav from "./Components/HomePage/NavBar/Nav";
import Footer from "./Components/FooterSection/Footer";
import PropertyDetails from "./Components/PropertyDetails/SingleProperty";

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property" element={<Property />} />

        <Route path="/property/:id" element={<PropertyDetails />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
