import React from "react";

export default function RegularButton({ startGame, children }) {
  return (
    <button
      className="px-6 py-3 text-lg font-semibold text-white bg-red-500 border-2 border-black rounded-lg shadow-lg 
                 hover:bg-yellow-500 active:scale-95 transition-all duration-300"
      onClick={startGame}
    >
      {children}
    </button>
  );
}
