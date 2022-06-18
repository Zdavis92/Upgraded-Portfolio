import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen min-w-screen text-lg">
        <Routes>
          <Route path="/Upgraded-Portfolio/" element={<AboutMe />} />
          <Route path="/Upgraded-Portfolio/contact" element={<Contact />} />
          <Route path="/Upgraded-Portfolio/portfolio" element={<Portfolio />} />
          <Route path="/Upgraded-Portfolio/resume" element={<Resume />} />
          <Route path="*" element={<AboutMe />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
