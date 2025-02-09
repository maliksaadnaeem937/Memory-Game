import React from "react";

export default function EmojiButton({
  style,
  content,
  handleClick,
  index,
  name,
  disable, 
}) {
  return (
    <button 
      className={style} 
      onClick={() => handleClick(index, name)} 
      disabled={disable} 
    >
      {content}
    </button>
  );
}
