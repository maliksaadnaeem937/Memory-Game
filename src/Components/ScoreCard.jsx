import React from "react";

export default function ScoreCard({ player1Score, player2Score }) {
  return (
    <div className="flex justify-between items-center w-[90%] sm:w-[70%] md:w-[50%] p-2 sm:p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold text-red-600">PLAYER 1</h3>
        <p className="text-3xl font-bold">{player1Score}</p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold text-blue-600">PLAYER 2</h3>
        <p className="text-3xl font-bold">{player2Score}</p>
      </div>
    </div>
  );
}
