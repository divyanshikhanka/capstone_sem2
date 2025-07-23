import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DestinationDetails from './pages/DestinationDetails';

function App() {
  return (
    <Router>
      {/* Navbar is fixed at the top */}
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:name" element={<DestinationDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* Footer at the bottom */}
      <Footer />
    </Router>
  );
}

export default App;
