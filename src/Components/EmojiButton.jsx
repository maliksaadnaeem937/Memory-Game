import React from "react";

export default function EmojiButton({
  style,
  content,
  handleClick,
  index,
  name,
}) {
  return (
    <button className={style} onClick={() => handleClick(index, name)}>
      {content}
    </button>
  );
}
