import React, { useRef, useEffect, useState } from "react";
import { Button } from "./buttons";

interface AudioProps {
  src: string;
}

const PlaySingleAudioOnConversationLoad = ({ src }: AudioProps) => {
  const audioRef = useRef<any>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      audioRef.current
        .play()
        .catch((error: any) => console.error("Autoplay failed:", error));
    }
  }, [src, isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="flex items-center space-x-2 p-4 bg-gray-100 rounded-lg">
      <audio ref={audioRef} src={src} />
      <button style={{ display: "none" }} onClick={toggleMute}></button>
    </div>
  );
};

export default PlaySingleAudioOnConversationLoad;
