import React from "react";

const Footer = () => {
  return (
    <div className="mt-8 text-center text-slate-400 text-sm">
      <p>
        Made by{" "}
        <a 
          href="https://github.com/michadasis" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors underline"
        >
          michadasis
        </a>
        {" & "}
        <a 
          href="https://github.com/tolissth" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors underline"
        >
          tolissth
        </a>
      </p>
    </div>
  );
};

export default Footer;