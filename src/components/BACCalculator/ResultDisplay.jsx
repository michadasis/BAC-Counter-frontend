import React from "react";

const ResultDisplay = ({ bac, status }) => {
  return (
    <div className={`mt-6 p-5 rounded-xl border ${status.bg} ${status.border}`}>
      <div className="text-center">
        <p className="text-slate-400 text-sm font-medium mb-2">Estimated BAC</p>
        <p className={`text-5xl font-bold ${status.color} mb-3`}>
          {bac.toFixed(3)}%
        </p>
        <p className={`text-lg font-semibold ${status.color}`}>
          {status.text}
        </p>
      </div>
    </div>
  );
};

export default ResultDisplay;