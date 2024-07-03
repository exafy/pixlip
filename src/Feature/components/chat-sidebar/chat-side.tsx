import styled from "@emotion/styled";
import { ConfiguratorLogo } from "../widget-icon";
import pixlipLogo from "../../../assets/pixlip_logo_classic.svg";
import { Button } from "../buttons";
import { ChatItem } from "./chat-items";
import english from "../../../assets/language/english.svg";
import { useEffect, useState } from "react";
import { getAllConversationList, getDeviceId } from "../../model/pixlip-model";
import { useNavigate } from "react-router-dom";
const chatItems = [
  { id: 1, name: "Brainstorming tradeshow bo..." },
  { id: 2, name: "Brainstorming tradeshow bo..." },
  { id: 3, name: "Brainstorming tradeshow bo..." },
  { id: 4, name: "Brainstorming tradeshow bo..." },
  { id: 5, name: "Brainstorming tradeshow bo..." },
];
interface SidebarProps {
  onClick: (id: number) => void;
  activeItem: number;
}
export const Sidebar = ({ onClick, activeItem }: SidebarProps) => {
  const navigate = useNavigate();
  const [chatItems, setChatitem] = useState<any>();

  const handleAllChats = async () => {
    try {
      const data = await getAllConversationList(getDeviceId() as number);
      console.log(data);
      setChatitem(data);
    } catch (e) {}
  };
  useEffect(() => {
    handleAllChats();
  }, []);
  

  return (
    <StyledSidebar>
      <StyledIconsContainer>
        <StyledAssetWrapper>
          <img
            onClick={() => {
              window.open("https://www.pixlip.com/en/");
            }}
            src={pixlipLogo}
            alt=""
          />
          <ConfiguratorLogo height="100px" width="100px" />
        </StyledAssetWrapper>

        <Button variant="outline" onClick={() => navigate("/")}>
          + New chat
        </Button>
        <StyledChatListWrapper>
          {chatItems?.details.map((data: any) => {
            const isActive = data.conversation_id === activeItem;
            return (
              <ChatItem
                active={isActive}
                key={data.chat_history.data[0].question}
                name={data.chat_history.data[0].question}
                id={data.conversation_id}
                onClick={(id) => onClick(id)}
              />
            );
          })}
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
  width: 220px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  padding: 20px;
  position: fixed;
  background: white;
  z-index: 1;
  height: calc(100vh - 40px);
`;
const StyledChatListWrapper = styled.div`
  position: relative;
  overflow-y: revert;
  height: calc(100vh - 330px);
`;

const StyledIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
const StyledAssetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const StyledBottomNavigationContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 20px;
  gap: 20px;
  width: calc(100% - 40px);
`;
const StyledLanguageIcon = styled.img`
  border-radius: 50%;
`;
