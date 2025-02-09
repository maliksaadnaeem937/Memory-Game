import React from "react";
import { decodeEntity } from "html-entities";
import EmojiButton from "./EmojiButton";

export default function MemoryCard({
  turnCard,
  emojiArray,
  selectedCards,
  matchingCards,
}) {
  const emojiEle = emojiArray.map((ele, index) => {
    const selected = selectedCards.find(
      (card) => card.index === index && card.name === ele.name
    );
    const matched = matchingCards.find(
      (card) => card.index === index && card.name === ele.name
    );
    return (
      <div key={index} className="flex justify-center items-center">
        <EmojiButton
          style={`flex justify-center items-center w-full h-24 sm:h-28 md:h-32 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 border-2 border-transparent rounded-lg shadow-md text-3xl text-white cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-600 hover:to-pink-600 ${
            selected || matched ? "cursor-not-allowed opacity-50" : ""   
          }`}
          content={selected || matched ? decodeEntity(ele.htmlCode[0]) : "❓"}
          handleClick={turnCard}
          index={index}
          name={ele.name}
          disable={selected||matched}
        />
      </div>
    );
  });

  return (
    <div className="grid w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] p-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 bg-blue-950 rounded-lg shadow-lg border-4 border-orange-400">
      {emojiEle}
    </div>
  );
}
