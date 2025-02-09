import React from "react";

export default function Turn({ turn }) {
  return (
    <div className="flex justify-center items-center p-2 sm:p-4 bg-blue-100 shadow-md rounded-md mb-4">
      <p
        className={`text-xl sm:text-2xl font-semibold ${
          turn === 1 ? "text-red-600" : "text-blue-600"
        }`}
      >
        {turn === 1 ? "PLAYER 1 " : "PLAYER 2"}
      </p>
    </div>
  );
}
