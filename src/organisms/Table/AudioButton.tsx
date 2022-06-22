import React, { useEffect } from "react";
import { useState } from "react";

type Types = {
  text: string,
  src: string,
}

const AudioButton = ({ text, src }: Types) => {
  let audio = new Audio(`assets/${src}.mp3`)
  
  const start = () => {
    audio.play()
  };

  useEffect(() => {
    if (window.location.hash === `#${src}`) {
      audio.play();
    }
  }, [])

  return (
    <button
      className="p-4 text-white bg-black/50 hover:bg-black/75"
      onClick={() => {
        start();
        window.history.pushState("", "", `${window.location.pathname}#${src}`);
      }}
    >
      {text}
    </button>
  );
};

export default AudioButton;

