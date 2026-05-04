import React from "react";
import { AlertCircle } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="mt-6 flex items-start gap-3 text-slate-300 text-xs bg-slate-800/40 p-4 rounded-xl border border-slate-600/50">
      <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
      <p>
        This calculator provides estimates only. Actual blood alcohol concetration in the blood varies based on many factors. Never drive under the influence, if you plan to drink, arrange for a safe ride home.
      </p>
    </div>
  );
};

export default Disclaimer;