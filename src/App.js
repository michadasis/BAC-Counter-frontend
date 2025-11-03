// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BACCalculator from "./BACCalculator";
import BACResultPage from "./BACResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BACCalculator />} />
        <Route path="/bac" element={<BACResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
