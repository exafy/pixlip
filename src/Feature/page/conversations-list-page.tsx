import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { Sidebar } from "../components/chat-sidebar/chat-side";
import { TypingArea } from "../components/typing-area";

export const ConversationListPage = () => {
  const { id } = useParams();
  const conversationId = parseInt(id as string);
  return (
    <StyledConversationLayout>
      <Sidebar></Sidebar>
      <StyledChatViewContainer></StyledChatViewContainer>
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
  height: calc(100vh - 120px);
  display: flex;
  width: calc(100vw - 250px);
  right: 0;
  position: absolute;
`;
