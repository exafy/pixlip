import styled from "@emotion/styled";
import { CardComponent } from "../components/card-component";
import { SendFirstMessageCard } from "../components/send-first-message-component";
import { ConfiguratorLogo } from "../components/widget-icon";
import { useNavigate } from "react-router-dom";
import {
  generatDeviceId,
  getDeviceId,
  setDeviceId,
  setNewUserChatStatus,
  startConversation,
} from "../model/pixlip-model";
import StartConversation from "./start-conversation";
export const WelcomePage = () => {
  return (
    <StyledStartConversationContainer>
      <StartConversation />
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
