import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BACCalculator from "./BACCalculator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BACCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
