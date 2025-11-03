// src/BACResultPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const BACResultPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const weight = params.get("weight");
  const drinks = params.get("drinks");
  const alcoholPercent = params.get("alcoholPercent");
  const hours = params.get("hours");
  const gender = params.get("gender");

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2 style={{ textAlign: "center" }}>BAC Data Sent to Backend</h2>
      <ul>
        <li><strong>Gender:</strong> {gender}</li>
        <li><strong>Weight:</strong> {weight} kg</li>
        <li><strong>Drinks:</strong> {drinks}</li>
        <li><strong>Alcohol %:</strong> {alcoholPercent}%</li>
        <li><strong>Hours since last drink:</strong> {hours}</li>
      </ul>
    </div>
  );
};

export default BACResultPage;
