import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { Sidebar } from "../components/chat-sidebar/chat-side";
import { TypingArea } from "../components/typing-area";
import { Question } from "../components/message/question-component";
import { Awnser } from "../components/message/awnser-component";
import { useState } from "react";
import { ConfiguratorDialog } from "../components/configurator/configuration-dialog";
const StyledConversationLayout = styled.div`
  display: flex;
`;
const StyledContentArea = styled.div`
  display: flex;
  width: calc(100vw - 278px);
`;
const StyledChatViewContainer = styled.div`
  height: calc(100vh - 140px);
  display: flex;
  width: calc(100vw - 280px);
  right: 0;
  flex-direction: column;
  position: absolute;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
`;

export const ConversationListPage = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();

  const conversationId = parseInt(id as string);
  return (
    <>
      <StyledConversationLayout>
        <Sidebar />
        <StyledContentArea>
          <StyledChatViewContainer>
            <Question>
              {
                "I'm exhibiting at a trade show soon and want to maximize the number of leads I generate. Can PIXLIP products help with booth design for lead generation?"
              }
            </Question>
            <Awnser
              onClick={() => setOpen(true)}
              type="button"
              buttonText="Configurator"
              awnser="To start booth design, just enter your website link below and send it to me or click plus icon and send me your design files. This way, I can grab all the cool stuff like colors, logos, and designs. I’ll make sure our creations match your brand style perfectly!Your information is kept secure and will only be used to enhance your exhibition booth design."
            />
          </StyledChatViewContainer>
          <TypingArea />
        </StyledContentArea>
      </StyledConversationLayout>
      <ConfiguratorDialog
        onClose={() => {
          setOpen(false);
        }}
        key={"ahsan"}
        openConfigutrator={open}
        id={""}
      />
    </>
  );
};