import styled from "@emotion/styled";
import { Header } from "./header";

export const ChatView = () => {
  return (
    <StyledChatContainer>
      <Header />
    </StyledChatContainer>
  );
};

const StyledChatContainer = styled.div`
  display: flex;
  position: absolute;
  width: 600px;
  height: 644px;
  right: 30px;
  bottom: 50px;
  border-radius: 17px;
  border: 1px solid rgba(34, 60, 80, 0.1);
  background: #fff;
  box-shadow: 0px 0px 15px 6px rgba(34, 60, 80, 0.1);
`;
