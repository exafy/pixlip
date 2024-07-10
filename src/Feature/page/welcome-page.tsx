import styled from "@emotion/styled";
import StartConversation from "./start-conversation";
import PlaySingleAudioOnLoad from "../components/auido-player";
import { useState } from "react";
export const WelcomePage = () => {
  const [play, setPlay] = useState<boolean>(false);
  return (
    <StyledStartConversationContainer>
      <StartConversation
        onPlay={() => {
          setPlay(true);
        }}
      />
      <PlaySingleAudioOnLoad play={play} />
    </StyledStartConversationContainer>
  );
};
const StyledStartConversationContainer = styled.div`
  height: calc(100vh - 130px);
  width: calc(100vw - 640px);
  margin-left: 320px;
  margin-right: 320px;
  margin-top: 50px;
  margin-bottom: 130px;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
`;
