import React from "react";

const GenderSelector = ({ gender, setGender }) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-200 mb-2">Gender</label>
      <div className="grid grid-cols-2 gap-3">
        {["male", "female"].map((g) => (
          <button
            key={g}
            onClick={() => setGender(g)}
            className={`py-3 px-4 rounded-xl font-medium transition-all capitalize ${
              gender === g
                ? "bg-red-700 text-white shadow-lg shadow-red-700/30"
                : "bg-slate-700/50 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {g}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenderSelector;