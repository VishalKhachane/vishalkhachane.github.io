import React from 'react';

const Logo = ({ forceDark = false }) => {
  const textClass = forceDark ? "text-white" : "text-midnight_text dark:text-white";
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-SkyBlueMist text-white font-black text-sm shadow-[0_4px_15px_rgba(47,115,242,0.4)] transition-transform duration-300 group-hover:scale-105">
        <span className="relative z-10 font-bold font-mono tracking-tighter">&lt;V/&gt;</span>
        <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className={`font-extrabold text-xl md:text-[22px] tracking-tight flex items-center ${forceDark ? "text-white" : ""}`}>
        <span className={forceDark ? "" : "bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400"}>
          Vishal
          <span className="font-light ml-1.5 opacity-90">Khachane</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;
