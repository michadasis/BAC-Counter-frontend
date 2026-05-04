import React, { useState } from "react";
import { Wine, Clock, Weight, Droplets } from "lucide-react";
import GenderSelector from "./GenderSelector";
import InputField from "./InputField";
import ResultDisplay from "./ResultDisplay";
import Disclaimer from "./Disclaimer";
import Footer from "./footer";
import Button from "../ui/Button"; 

const BACCalculator = () => {
  const [weight, setWeight] = useState("");
  const [drinks, setDrinks] = useState("");
  const [alcoholPercent, setAlcoholPercent] = useState("");
  const [hours, setHours] = useState("");
  const [gender, setGender] = useState("male");
  const [drinkVolume, setDrinkVolume] = useState("");
  const [response, setResponse] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCalculate = async () => {
    if (!weight || !drinks || !alcoholPercent || !hours || !drinkVolume) {
      alert("Please fill in all fields!");
      return;
    }

    setLoading(true);
    const alc_g = Number(drinks) * Number(drinkVolume) * (Number(alcoholPercent) / 100) * 0.789;

    const payload = {
      weight: Number(weight),
      sex: gender,
      alc_g: alc_g,
      hrs: Number(hours),
    };

    try {
      const backendUrl = 'https://bac-counter-backend.vercel.app';
      const res = await fetch(`${backendUrl}/bac`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send data to backend");

      const data = await res.json();
      setResponse(data);
      setShowResult(true);
    } catch (err) {
      console.error(err);
      alert("Error sending data to backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    /* 
       Updated background: Using 'bg-[#2d3748]' (Slate 800) or 'bg-[#1a202c]' 
       to match the dark navy in your logo. 
    */
    <div className="min-h-screen bg-[#242f3d] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        
        {/* Header with Logo - Background removed to blend with page */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-4">
            <img 
              src="/logo512.png" 
              alt="Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-4xl font-black text-white mb-2">Blood Alcohol Calculator</h1>
          <p className="text-slate-400 font-medium">Estimate your blood alcohol content</p>
        </div>

        {/* Main Card - Slightly darker than background to create depth */}
        <div className="bg-[#1c2531] rounded-3xl border border-white/5 shadow-2xl p-8 space-y-6">
          <GenderSelector gender={gender} setGender={setGender} />
          
          <div className="space-y-4">
            <InputField label="Weight (kg)" icon={Weight} value={weight} onChange={setWeight} placeholder="70" />
            <InputField label="Number of Drinks" icon={Wine} value={drinks} onChange={setDrinks} placeholder="3" />
            <InputField label="Volume per Drink (ml)" icon={Droplets} value={drinkVolume} onChange={setDrinkVolume} placeholder="350" />
            <InputField label="Alcohol %" value={alcoholPercent} onChange={setAlcoholPercent} placeholder="5" step="0.1" />
            <InputField label="Hours Since Last Drink" icon={Clock} value={hours} onChange={setHours} placeholder="2" step="0.5" />
          </div>

          <Button
            onClick={handleCalculate}
            disabled={loading}
            className="w-full bg-[#b91c1c] hover:bg-[#991b1b] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-red-900/20"
          >
            {loading ? "Calculating..." : "Calculate"}
          </Button>

          {showResult && <ResultDisplay response={response} />}
        </div>

        <Disclaimer />
        <Footer />
      </div>
    </div>
  );
};

export default BACCalculator;