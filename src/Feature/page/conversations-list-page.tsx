import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { Sidebar } from "../components/chat-sidebar/chat-side";
import { TypingArea } from "../components/typing-area";
import { Question } from "../components/message/question-component";

export const ConversationListPage = () => {
  const { id } = useParams();
  const conversationId = parseInt(id as string);
  return (
    <StyledConversationLayout>
      <Sidebar></Sidebar>
      <StyledChatViewContainer>
        <Question children="I'm exhibiting at a trade show soon and want to maximize the number of leads I generate. Can PIXLIP products help with booth design for lead generation?" />
      </StyledChatViewContainer>
      <StyledContentArea>
        <TypingArea />
      </StyledContentArea>
    </StyledConversationLayout>
  );
};

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
  position: absolute;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
`;
