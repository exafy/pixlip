import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import { Sidebar } from "../components/chat-sidebar/chat-side";
import { TypingArea } from "../components/typing-area";
import { Question } from "../components/message/question-component";
import { Key, useEffect, useRef, useState } from "react";
import { ConfiguratorDialog } from "../components/configurator/configuration-dialog";
import { GoConfigurator } from "./go-configurator";
import { Awnser } from "../components/message/awnser-component";
import {
  getAllConversationList,
  getDeviceId,
  getSelectedChatData,
  resumeConversation,
} from "../model/pixlip-model";
import StartConversation from "./start-conversation";
import mediaPlaceHolder from "../../assets/media-placeholder.svg";
import { ShimmerText } from "shimmer-effects-react";
import PlaySingleAudioOnLoad from "../components/auido-player";
import PlaySingleAudioOnConversationLoad from "../components/audio-conversation";

const StyledConversationLayout = styled.div`
  display: flex;
`;

const StyledContentArea = styled.div`
  display: flex;
  width: calc(100vw - 260px);
  height: calc(100vh - 145px);
  flex-direction: column;
  right: 0;
  overflow-y: scroll;
  position: absolute;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e5e5e5;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`;

const StyledContentAreaNewChat = styled.div`
  display: flex;
  width: calc(100vw - 260px);
  height: calc(100vh - 120px);
  flex-direction: column;
  right: 0;
  bottom: 120px;
  position: absolute;
  align-items: center;
  justify-content: center;
`;
interface ChatItemProps {
  isDivider: boolean;
}
const StyledChatViewContainer = styled.div<ChatItemProps>`
  height: fit-content;
  display: flex;
  width: calc(100vw - 320px);
  right: 0;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  position: relative;
  border-bottom: ${(props) =>
    props.isDivider ? "1px solid #9f9f9f" : "unset"};
`;

// Utility function to remove unnecessary newlines
const formatText = (text: string) => {
  return text.replace(/\\n/g, "\n");
};

export const ConversationListPage = () => {
  const [open, setOpen] = useState(false);
  const [opendChat, setOpenedChat] = useState<any>(false);
  const [isAnimated, setIsAnimated] = useState<any>(false);

  const [message, setMessage] = useState<string>("");
  const [typed, setTyped] = useState<string>("");
  const [chatItems, setChatitem] = useState<any>();
  const [shimmer, setShummer] = useState<boolean | null>(null);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const idInt = parseInt(id as string);
  useEffect(() => {
    if (idInt > 1) {
      handleOpenedChat(idInt);
    }
  }, [idInt]);

  const handleAllChats = async () => {
    try {
      const data = await getAllConversationList(getDeviceId() as number);
      setChatitem(() => data);
    } catch (e) {}
  };
  useEffect(() => {
    handleAllChats();
  }, [idInt]);
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [opendChat, shimmer]);
  const handleOpenedChat = async (id: number) => {
    try {
      const data = await getSelectedChatData(id);
      setOpenedChat(data);
      setIsAnimated(false);
    } catch (e) {}
  };
  const handleResumeConversation = async (message: string) => {
    try {
      setTyped(message);
      setShummer(true);
      const data = await resumeConversation(message, idInt);
      setIsAnimated(true);
      setOpenedChat(data);
      setShummer(false);
      setMessage("");
      setTyped("");
    } catch {
      setIsAnimated(false);
      setShummer(false);
    }
  };

  return (
    <>
      <StyledConversationLayout>
        <Sidebar
          activeItem={idInt}
          onClick={(id: number) => {
            handleOpenedChat(id);
            navigate(`/conversation/${id}`);
          }}
          onNewChat={() => {
            navigate(`/conversation/${-1}`);
          }}
          allChats={chatItems}
        />
        {idInt > 1 && (
          <StyledContentArea ref={chatContainerRef}>
            {opendChat?.details?.audio_file && (
              <PlaySingleAudioOnConversationLoad
                src={`https://backend.exafy.io/${opendChat?.details?.audio_file}`}
              />
            )}
            {opendChat?.details?.chat_history?.data.map(
              (chat: any, index: number) => (
                <StyledChatViewContainer
                  key={chat?.response?.Short_Answer}
                  isDivider={
                    index !== opendChat?.details?.chat_history?.data?.length - 1
                  }
                >
                  <Question>{chat?.question}</Question>
                  <Awnser
                    media={mediaPlaceHolder}
                    isAnimated={
                      opendChat?.details?.chat_history?.data?.length - 1 ===
                      index
                        ? isAnimated
                        : false
                    }
                    type={
                      (opendChat?.details?.booth_url?.data
                        ?.length as number) === undefined
                        ? "text"
                        : "button"
                    }
                    buttonText="Configurator"
                    awnser={chat?.response?.Short_Answer}
                    onClick={() => {
                      setOpen(true);
                    }}
                  />
                  {shimmer &&
                    opendChat?.details?.chat_history?.data?.length - 1 ===
                      index && (
                      <StyledShimmerWrapper>
                        <StyledText>Analyzing your request...</StyledText>
                        <StyledShimmerEffect mode="light" line={4} gap={6} />
                      </StyledShimmerWrapper>
                    )}
                  <ConfiguratorDialog
                    onClose={() => {
                      setOpen(false);
                    }}
                    key={"ahsan"}
                    openConfigutrator={open}
                    children={<GoConfigurator data={opendChat?.details} />}
                  />
                </StyledChatViewContainer>
              )
            )}
          </StyledContentArea>
        )}
        {idInt === -1 && (
          <StyledContentAreaNewChat>
            <StartConversation enabledHeadings={false} />
          </StyledContentAreaNewChat>
        )}
      </StyledConversationLayout>
      {idInt > 1 && (
        <TypingArea
          onChange={(value: string) => {
            setMessage(value);
          }}
          onSubmit={() => {
            handleResumeConversation(message);
          }}
          value={message}
        />
      )}
    </>
  );
};

const StyledShimmerEffect = styled(ShimmerText)`
  margin-top: 20px;
`;
const StyledText = styled.div`
  color: #000;
  display: flex;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  margin-bottom: 10px;
  margin-top: 30px;
`;
const StyledShimmerWrapper = styled.div`
  margin-top: 20px;
  border-top: 1px solid #9f9f9f;
`;