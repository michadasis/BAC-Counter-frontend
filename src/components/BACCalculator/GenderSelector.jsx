import React from "react";

const GenderSelector = ({ gender, setGender }) => {
  return (
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
  );
};

export default GenderSelector;