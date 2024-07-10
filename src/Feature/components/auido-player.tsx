import React, { useRef, useEffect } from "react";

interface AudioProps {
  play: boolean;
}

const PlaySingleAudioOnLoad = ({ play }: AudioProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.src = "https://backend.exafy.io/media/welcome_msg.wav";
      audioRef.current.play().catch((error) => {});
    }
  };
  const handleClick = () => {
    playAudio();
  };
  useEffect(() => {
    handleClick();
  }, [play]);

  return (
    <div>
      <audio ref={audioRef} />
    </div>
  );
};

export default PlaySingleAudioOnLoad;
