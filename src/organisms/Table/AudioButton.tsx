import React from "react";
import { useState } from "react";

type Types = {
  text: string,
  src: string,
}

const AudioButton = ({ text, src }: Types) => {
  let audio = new Audio(src)

  const start = () => {
    audio.play()
  };

  return (
    <button
      className="p-4 text-white bg-black/50 hover:bg-black/75"
      onClick={start}
    >
      {text}
    </button>
  );
};

export default AudioButton;

