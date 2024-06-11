import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { Sidebar } from "../components/chat-sidebar/chat-side";

export const ConversationListPage = () => {
  const { id } = useParams();
  const conversationId = parseInt(id as string);
    return <StyledConversationLayout>
      <Sidebar></Sidebar>
  </StyledConversationLayout>;
};

const StyledConversationLayout = styled.div`
  display: flex;
`;
const StyledContentArea = styled.div`
  display: flex;
  width: calc(100vw - 278px);
`;
