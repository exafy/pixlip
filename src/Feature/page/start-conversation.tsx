import styled from "@emotion/styled";
import { CardComponent } from "../components/card-component";
import { SendFirstMessageCard } from "../components/send-first-message-component";
import { ConfiguratorLogo } from "../components/widget-icon";
import { useNavigate } from "react-router-dom";
import {
  generatDeviceId,
  getDeviceId,
  setDeviceId,
  startConversation,
} from "../model/pixlip-model";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Icon } from "../components/icon";
import { CircularIndeterminate } from "../components/loader-component";
const defaultMessage = [
  { id: 1, message: "Let's design a booth together" },
  { id: 2, message: "Show me booth designs" },
  { id: 3, message: "Best booth design for my company" },
  { id: 4, message: "Recommend PIXLIP products for my event" },
];
interface StartConversationProps {
  enabledHeadings?: boolean;
  onPlay?: () => void;
}
export const StartConversation = ({
  enabledHeadings = true,
  onPlay,
}: StartConversationProps) => {
  const [message, setMessage] = useState<string | null>(null);
  const [showLoader, setShowLoader] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleStartConversation = async () => {
    await sendMessageFirstTime(message as string);
  };
  const sendMessageFirstTime = async (value: string) => {
    try {
      const checkIdExist = getDeviceId();
      setShowLoader(true);
      if (!checkIdExist) {
        const deviceId = generatDeviceId();
        const data = await startConversation(value, deviceId);
        setDeviceId(deviceId);
        setShowLoader(false);
        navigate(`/conversation/${data?.details?.conversation_id}`);
      } else {
        const data = await startConversation(value, checkIdExist);
        navigate(`/conversation/${data?.details?.conversation_id}`);
        setShowLoader(false);
      }
    } catch (e) {
      setShowLoader(false);
    }
  };
  return (
    <>
      {enabledHeadings && (
        <>
          <ConfiguratorLogo height="200px" width="200px" />
          <StyledHeadingText>
            <TypeAnimation
              sequence={["Welcome, this is PIXLIP AI", 1000]}
              wrapper="div"
              speed={50}
              cursor={false}
              style={{
                fontSize: "50px",
                display: "inline-block",
                fontFamily: "Roboto",
                textAlign: "center",
              }}
            />
            <StyledIcon>
              <Icon name="campaign" onClick={() => onPlay?.()} />
            </StyledIcon>
          </StyledHeadingText>
          {showLoader && <CircularIndeterminate />}
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
const StyledIcon = styled.div`
  margin-left: 20px;
`;