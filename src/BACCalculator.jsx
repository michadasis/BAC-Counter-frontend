import React, { useState } from "react";

const BACCalculator = () => {
  const [weight, setWeight] = useState("");
  const [drinks, setDrinks] = useState("");
  const [alcoholPercent, setAlcoholPercent] = useState("");
  const [hours, setHours] = useState("");
  const [gender, setGender] = useState("male");
  const [drinkVolume, setDrinkVolume] = useState(""); // volume in ml
  const [response, setResponse] = useState(null); // to show backend response
  const config = require('./config.json')

  const handleCalculate = async () => {
    if (!weight || !drinks || !alcoholPercent || !hours || !drinkVolume) {
      alert("Please fill in all fields!");
      return;
    }

    const payload = {
      weight: Number(weight),
      drinks: Number(drinks),
      drinkVolume: Number(drinkVolume),
      alcoholPercent: Number(alcoholPercent),
      hours: Number(hours),
      gender,
    };

    try {
      const res = await fetch(`${config.url}` , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to send data to backend");
      }

      const data = await res.json();
      setResponse(data); // display response from backend
    } catch (err) {
      console.error(err);
      alert("Error sending data to backend. Check console.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2 style={{ textAlign: "center" }}>Blood Alcohol Calculator</h2>

      <div style={{ marginBottom: 10 }}>
        <label>Gender: </label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Weight (kg): </label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Number of Drinks: </label>
        <input type="number" value={drinks} onChange={(e) => setDrinks(e.target.value)} />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Drink Volume (ml): </label>
        <input type="number" value={drinkVolume} onChange={(e) => setDrinkVolume(e.target.value)} />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Alcohol % (per drink): </label>
        <input type="number" value={alcoholPercent} onChange={(e) => setAlcoholPercent(e.target.value)} />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Hours Since Last Drink: </label>
        <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} />
      </div>

      <button onClick={handleCalculate} style={{ marginTop: 10, width: "100%", padding: 10 }}>
        Send
      </button>

      {response && (
        <div style={{ marginTop: 20 }}>
          <h3>Backend Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default BACCalculator;
