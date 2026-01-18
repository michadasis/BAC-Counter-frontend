import React from "react";
import { AlertCircle } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="mt-6 flex items-start gap-3 text-slate-400 text-xs bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
      <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
      <p>
        This calculator provides estimates only. Actual BAC varies based on many factors. 
        Never drive under the influence. If you plan to drink, arrange for a safe ride home.
      </p>
    </div>
  );
};

export default Disclaimer;