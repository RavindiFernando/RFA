import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(var(--primary2))] text-[hsl(var(--primary-foreground))]">
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        <svg className="animate-spin h-12 w-12 text-[hsl(var(--primary))]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
        <span className="text-xl font-semibold tracking-wide">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
