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
      <div key={index}>
        <EmojiButton
          style={`flex justify-center items-center w-10 h-10 sm:w-20 sm:h-20 bg-yellow-300 border border-black rounded-lg shadow-md sm:text-2xl text-xl cursor-pointer hover:bg-yellow-400 transition-all duration-300 ${
            selected || matched ? "cursor-not-allowed" : ""
          }`}
          content={selected || matched ? decodeEntity(ele.htmlCode[0]) : "❓"}
          handleClick={turnCard}
          index={index}
          name={ele.name}
        />
      </div>
    );
  });

  return (
    <div className="grid  p-2 grid-cols-5 gap-2 sm:gap-4 sm:p-6 bg-white shadow-lg rounded-lg border border-orange-300">
      {emojiEle}
    </div>
  );
}
