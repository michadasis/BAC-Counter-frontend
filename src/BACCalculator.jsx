import React, { useState } from "react";
import { AlertCircle, Wine, Clock, Weight, Droplets } from "lucide-react";

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

  const config = require("./config.json");

  const handleCalculate = async () => {
    if (!weight || !drinks || !alcoholPercent || !hours || !drinkVolume) {
      alert("Please fill in all fields!");
      return;
    }

    setLoading(true);

    const alc_g =
      Number(drinks) *
      Number(drinkVolume) *
      (Number(alcoholPercent) / 100) *
      0.789;

    const payload = {
      weight: Number(weight),
      sex: gender,
      alc_g: alc_g,
      hrs: Number(hours),
    };

    try {
      const res = await fetch(`${config.url}/bac`, {
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
      setResponse(data);
      setShowResult(true);
    } catch (err) {
      console.error(err);
      alert("Error sending data to backend. Check console.");
    } finally {
      setLoading(false);
    }
  };

  const getBACStatus = (bacValue) => {
    if (bacValue === null || bacValue === undefined) return { text: "", color: "" };
    if (bacValue < 0.02) return { text: "Sober", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/30" };
    if (bacValue < 0.05) return { text: "Slight Impairment", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/30" };
    if (bacValue < 0.08) return { text: "Impaired", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30" };
    return { text: "Legally Intoxicated", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/30" };
  };

  const status = response ? getBACStatus(response.bac) : { text: "", color: "", bg: "", border: "" };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
            <Wine className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">BAC Calculator</h1>
          <p className="text-slate-400">Estimate your blood alcohol content</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Gender</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setGender("male")}
                className={`py-3 px-4 rounded-xl font-medium transition-all ${
                  gender === "male"
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-slate-700/50 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Male
              </button>
              <button
                onClick={() => setGender("female")}
                className={`py-3 px-4 rounded-xl font-medium transition-all ${
                  gender === "female"
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-slate-700/50 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Female
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
              <Weight className="w-4 h-4" />
              Weight (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="70"
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
              <Wine className="w-4 h-4" />
              Number of Drinks
            </label>
            <input
              type="number"
              value={drinks}
              onChange={(e) => setDrinks(e.target.value)}
              placeholder="3"
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
              <Droplets className="w-4 h-4" />
              Volume per Drink (ml)
            </label>
            <input
              type="number"
              value={drinkVolume}
              onChange={(e) => setDrinkVolume(e.target.value)}
              placeholder="350"
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Alcohol %</label>
            <input
              type="number"
              value={alcoholPercent}
              onChange={(e) => setAlcoholPercent(e.target.value)}
              placeholder="5"
              step="0.1"
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Hours Since Last Drink
            </label>
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="2"
              step="0.5"
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <button
            onClick={handleCalculate}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Calculating..." : "Calculate BAC"}
          </button>

          {showResult && response && response.bac !== null && response.bac !== undefined && (
            <div className={`mt-6 p-5 rounded-xl border ${status.bg} ${status.border}`}>
              <div className="text-center">
                <p className="text-slate-400 text-sm font-medium mb-2">Estimated BAC</p>
                <p className={`text-5xl font-bold ${status.color} mb-3`}>
                  {response.bac.toFixed(3)}%
                </p>
                <p className={`text-lg font-semibold ${status.color}`}>
                  {status.text}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex items-start gap-3 text-slate-400 text-xs bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
          <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <p>
            This calculator provides estimates only. Actual BAC varies based on many factors. Never drive under the influence. If you plan to drink, arrange for a safe ride home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BACCalculator;