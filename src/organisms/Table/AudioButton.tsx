import React, { useEffect } from "react";
import { useState } from "react";

type Types = {
  text: string;
  src: string;
};

const AudioButton = ({ text, src }: Types) => {
  let audio = new Audio(`${src}.mp3`);

  const start = () => {
    audio.play();
  };

  useEffect(() => {
    if (window.location.hash.includes(`${src}`)) {
      audio.play();
    }
  }, []);

  return (
    <button
      className="p-4 text-white hover:text-[#f7eb5a] border border-white hover:border-[#f7eb5a]"
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
