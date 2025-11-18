
import Homepage from './pages/Homepage'
import './App.css'
import React from "react";
import { Routes, Route } from "react-router-dom";

import BlogPage from "./pages/Blog";
import { Navbar } from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
};

export default App
