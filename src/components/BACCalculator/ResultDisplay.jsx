import React from "react";

const ResultDisplay = ({ response }) => {
  if (!response || response.bac === null || response.bac === undefined) return null;

  const getBACStatus = (bacValue) => {
    if (bacValue < 0.02) return { text: "Sober", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" };
    if (bacValue < 0.05) return { text: "Slight Impairment", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/30" };
    if (bacValue < 0.08) return { text: "Impaired", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30" };
    return { text: "Legally Intoxicated", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/30" };
  };

  const status = getBACStatus(response.bac);

  return (
    <div className={`mt-6 p-5 rounded-xl border ${status.bg} ${status.border}`}>
      <div className="text-center">
        <p className="text-slate-300 text-sm font-medium mb-2">Estimated BAC</p>
        <p className={`text-5xl font-bold ${status.color} mb-3`}>
          {response.bac.toFixed(3)}%
        </p>
        <p className={`text-lg font-semibold ${status.color}`}>
          {status.text}
        </p>
      </div>
    </div>
  );
};

export default ResultDisplay;