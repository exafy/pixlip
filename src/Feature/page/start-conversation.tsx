import styled from "@emotion/styled";
import { CardComponent } from "../components/card-component";
import { SendFirstMessageCard } from "../components/send-first-message-component";
import { ConfiguratorLogo } from "../components/widget-icon";
import { useNavigate } from "react-router-dom";
import {
  generatDeviceId,
  getDeviceId,
  setDeviceId,
} from "../model/pixlip-model";
import { useEffect } from "react";
const defaultMessage = [
  { id: 1, message: "Show me what PIXLIP AI can do" },
  { id: 2, message: "I need help designing my booth" },
  { id: 3, message: "How can PIXLIP enhance my booth design" },
  { id: 4, message: "What is the shipping cost" },
];
export const StartConversation = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkIdExist = getDeviceId();
    if (!checkIdExist) {
      const deviceId = generatDeviceId();
      setDeviceId(deviceId);
    } else {
      navigate(`/conversation`);
    }
  }, []);
  return (
    <StyledStartConversationContainer>
      <ConfiguratorLogo height="200px" width="200px" />
      <StyledHeadingText>Welcome, this is PIXLIP AI</StyledHeadingText>
      <SendFirstMessageCard />
      <OptionCardContainer>
        {defaultMessage.map((data) => (
          <CardComponent
            onClick={() => {
              navigate(`conversation`);
            }}
            key={data.message}
          >
            {data.message}
          </CardComponent>
        ))}
      </OptionCardContainer>
    </StyledStartConversationContainer>
  );
};
export default StartConversation;
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
const StyledHeadingText = styled.div`
  color: #141414;
  text-align: center;
  font-family: Roboto;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
`;

const OptionCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  width: calc(100vw - 640px);
`;
