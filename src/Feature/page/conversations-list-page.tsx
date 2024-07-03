import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import { Sidebar } from "../components/chat-sidebar/chat-side";
import { TypingArea } from "../components/typing-area";
import { Question } from "../components/message/question-component";
import { Key, useEffect, useRef, useState } from "react";
import { ConfiguratorDialog } from "../components/configurator/configuration-dialog";
import { GoConfigurator } from "./go-configurator";
import { Awnser } from "../components/message/awnser-component";
import { getSelectedChatData, resumeConversation } from "../model/pixlip-model";

const StyledConversationLayout = styled.div`
  display: flex;
`;

const StyledContentArea = styled.div`
  display: flex;
  width: calc(100vw - 260px);
  height: calc(100vh - 120px);
  flex-direction: column;
  right: 0;
  bottom: 120px;
  overflow-y: scroll;
  position: absolute;
`;

const StyledChatViewContainer = styled.div`
  height: fit-content;
  display: flex;
  width: calc(100vw - 320px);
  right: 0;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 20px;
  position: relative;
  border-bottom: 1px solid #9f9f9f;
`;

// Utility function to remove unnecessary newlines
const formatText = (text: string) => {
  return text.replace(/\\n/g, "\n");
};

export const ConversationListPage = () => {
  const [open, setOpen] = useState(false);
  const [opendChat, setOpenedChat] = useState<any>(false);
  const [message, setMessage] = useState<string>("");
  const [typed, setTyped] = useState<string>("");
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const idInt = parseInt(id as string);
  useEffect(() => {
    handleOpenedChat(idInt);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [opendChat]);
  const handleOpenedChat = async (id: number) => {
    try {
      const data = await getSelectedChatData(id);
      setOpenedChat(data);
      navigate("");
    } catch (e) {}
  };
  const handleResumeConversation = async (message: string) => {
    try {
      setTyped(message);
      const data = await resumeConversation(message, idInt);
      setOpenedChat(data);
      setMessage("");
      setTyped("");
    } catch {}
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
        />
        <StyledContentArea ref={chatContainerRef}>
          {opendChat?.details?.chat_history?.data.map((chat: any) => (
            <StyledChatViewContainer key={chat?.response["Entire Answer"]}>
              <Question>{chat?.question}</Question>
              <Awnser
                type="text"
                buttonText="Configurator"
                awnser={chat?.response["Entire Answer"]}
              />
            </StyledChatViewContainer>
          ))}
        </StyledContentArea>
      </StyledConversationLayout>
      <TypingArea
        onChange={(value: string) => {
          setMessage(value);
        }}
        onSubmit={() => {
          handleResumeConversation(message);
        }}
        value={message}
      />
      <ConfiguratorDialog
        onClose={() => {
          setOpen(false);
        }}
        key={"ahsan"}
        openConfigutrator={open}
        children={<GoConfigurator />}
      />
    </>
  );
};
