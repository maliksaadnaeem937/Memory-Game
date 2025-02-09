import React from "react";
import RegularButton from "./RegularButton";
import Celebrations from "./Celebrations";

export default function GameOver({ startGame, player1Score, player2Score }) {
 
  let gameResult = "It's a Draw!";
  let resultClass = "text-gray-600"; 

  if (player1Score > player2Score) {
    gameResult = "PLAYER 1 Wins!";
    resultClass = "text-red-600";
  } else if (player2Score > player1Score) {
    gameResult = "PLAYER 2 Wins!";
    resultClass = "text-blue-600";
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <Celebrations></Celebrations>
      <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
          Game Over
        </h2>
        <p className={`text-2xl sm:text-3xl font-semibold mb-6 ${resultClass}`}>
          {gameResult}
        </p>
        <RegularButton startGame={startGame}>Play Again</RegularButton>
      </div>
    </div>
  );
}
