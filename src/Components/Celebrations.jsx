import React from "react";
import Confetti from "react-confetti";

const Celebrations = () => {

  return (
    <div
      className="fixed pointer-events-none top-0 left-0 bottom-0 right-0 w-full h-full z-100  border-8  border-black"
    >
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={500} 
        gravity={0.2} 
      />
    </div>
  );
};

export default Celebrations;
