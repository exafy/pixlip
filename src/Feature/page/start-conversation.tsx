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
import { useState } from "react";
const defaultMessage = [
  { id: 1, message: "Show me what PIXLIP AI can do" },
  { id: 2, message: "I need help designing my booth" },
  { id: 3, message: "How can PIXLIP enhance my booth design" },
  { id: 4, message: "What is the shipping cost" },
];
interface StartConversationProps {
  enabledHeadings?: boolean;
}
export const StartConversation = ({
  enabledHeadings = true,
}: StartConversationProps) => {
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleStartConversation = async () => {
    await sendMessageFirstTime(message as string);
  };
  const sendMessageFirstTime = async (value: string) => {
    try {
      const data = await startConversation(value as string);
      const checkIdExist = getDeviceId();
      if (!checkIdExist) {
        const deviceId = generatDeviceId();
        setDeviceId(deviceId);
        setNewUserChatStatus(true);
      }
      navigate(`/conversation/${data?.details?.conversation_id}`);
    } catch (e) {}
  };
  return (
    <>
      {enabledHeadings && (
        <>
          <ConfiguratorLogo height="200px" width="200px" />
          <StyledHeadingText>Welcome, this is PIXLIP AI</StyledHeadingText>
        </>
      )}
      <SendFirstMessageCard
        onChange={(value: string) => {
          setMessage(value);
        }}
        onSubmit={async () => {
          handleStartConversation();
        }}
      />
      <OptionCardContainer>
        {defaultMessage.map((data) => (
          <CardComponent
            onClick={async (data) => {
              await sendMessageFirstTime(data as string);
            }}
            key={data.message}
          >
            {data.message}
          </CardComponent>
        ))}
      </OptionCardContainer>
    </>
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
