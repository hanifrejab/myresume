import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "./Navbar";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div id="home" className="App">
      <Navbar />
      <Header />
      <Body />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
