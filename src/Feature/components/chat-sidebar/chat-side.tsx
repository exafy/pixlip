import styled from "@emotion/styled";
import { ConfiguratorLogo } from "../widget-icon";
import pixlipLogo from "../../../assets/pixlip_logo_classic.svg";
import { Button } from "../buttons";
import { ChatItem } from "./chat-items";
import english from "../../../assets/language/english.svg";
const chatItems = [
  { id: 1, name: "Brainstorming tradeshow bo..." },
  { id: 2, name: "Brainstorming tradeshow bo..." },
  { id: 3, name: "Brainstorming tradeshow bo..." },
  { id: 4, name: "Brainstorming tradeshow bo..." },
  { id: 5, name: "Brainstorming tradeshow bo..." },
];
export const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledIconsContainer>
        <img src={pixlipLogo} alt="" />
        <ConfiguratorLogo height="100px" width="100px" />
        <Button variant="outline">+ New chat</Button>
        <StyledChatListWrapper>
          {chatItems.map((data) => (
            <ChatItem name={data.name} id={data.id} />
          ))}
        </StyledChatListWrapper>
      </StyledIconsContainer>
      <StyledBottomNavigationContainer>
        <StyledLanguageIcon src={english} />
        <Button variant="filled">Login / Sign up</Button>
      </StyledBottomNavigationContainer>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 200px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  padding: 20px;
`;
const StyledChatListWrapper = styled.div`
  position: relative;
  overflow-y: revert;
  height: calc(100% - 280px);
`;

const StyledIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const StyledBottomNavigationContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 20px;
  gap: 10px;
  width: calc(100% - 40px);
`;
const StyledLanguageIcon = styled.img`
  border-radius: 50%;
`;
