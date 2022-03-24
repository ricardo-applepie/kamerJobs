import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';

function App() {
  return (
    <>
       <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="expenses" element={<Home />} />
            <Route path="invoices" element={<Home />} />
          </Routes>
       </>
  );
}

export default App;
