import React from "react";

const Button = ({ onClick, disabled, loading, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full font-semibold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {loading ? "Calculating..." : children}
    </button>
  );
};

export default Button;