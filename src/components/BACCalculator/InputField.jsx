import React from "react";

const InputField = ({ label, icon: Icon, value, onChange, placeholder, type = "number", step }) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-200 mb-2 flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4" />}
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        step={step}
        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
      />
    </div>
  );
};

export default InputField;