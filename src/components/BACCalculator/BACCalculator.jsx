import React, { useState } from "react";
import { Wine, Clock, Weight, Droplets } from "lucide-react";
import GenderSelector from "./GenderSelector";
import InputField from "./InputField";
import ResultDisplay from "./ResultDisplay";
import Disclaimer from "./Disclaimer";
import Footer from "./footer";
import Button from "../ui/Button";
import { calculateAlcoholGrams, validateInputs } from "../../utils/bacCalculations";
import { getBACStatus } from "../../utils/bacStatus";
import { calculateBAC } from "../../services/api";

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
    if (!validateInputs(weight, drinks, alcoholPercent, hours, drinkVolume)) {
      alert("Please fill in all fields!");
      return;
    }

    setLoading(true);

    const alc_g = calculateAlcoholGrams(drinks, drinkVolume, alcoholPercent);

    const payload = {
      weight: Number(weight),
      sex: gender,
      alc_g: alc_g,
      hrs: Number(hours),
    };

    try {
      const data = await calculateBAC(payload);
      setResponse(data);
      setShowResult(true);
    } catch (err) {
      console.error(err);
      alert("Error sending data to backend. Check console.");
    } finally {
      setLoading(false);
    }
  };

  const status = response ? getBACStatus(response.bac) : { text: "", color: "", bg: "", border: "" };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
            <Wine className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Blood Alcohol Calculator</h1>
          <p className="text-slate-400">Estimate your blood alcohol content</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-6 space-y-5">
          <GenderSelector gender={gender} setGender={setGender} />
          
          <InputField
            label="Weight (kg)"
            icon={Weight}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="70"
          />
          
          <InputField
            label="Number of Drinks"
            icon={Wine}
            value={drinks}
            onChange={(e) => setDrinks(e.target.value)}
            placeholder="3"
          />
          
          <InputField
            label="Volume per Drink (ml)"
            icon={Droplets}
            value={drinkVolume}
            onChange={(e) => setDrinkVolume(e.target.value)}
            placeholder="350"
          />
          
          <InputField
            label="Alcohol %"
            value={alcoholPercent}
            onChange={(e) => setAlcoholPercent(e.target.value)}
            placeholder="5"
            step="0.1"
          />
          
          <InputField
            label="Hours Since Last Drink"
            icon={Clock}
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            placeholder="2"
            step="0.5"
          />

          <Button onClick={handleCalculate} disabled={loading} loading={loading}>
            Calculate
          </Button>

          {showResult && response && response.bac !== null && response.bac !== undefined && (
            <ResultDisplay bac={response.bac} status={status} />
          )}
        </div>

        <Disclaimer />
        <Footer />
      </div>
    </div>
  );
};

export default BACCalculator;