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
  const chats = {
    details: [
      {
        conversation_id: 4,
        chat_history: {
          data: [
            {
              question: "Hi",
              response:
                "Short Answer: Hi there! 👋 How can I help you today? \n\nEntire Answer: Hi there!  How can I assist you today? Are you interested in learning more about PIXLIP products, need help with an order, or have a technical question?  I'm happy to help!\n\nContext Language: English \n",
            },
          ],
        },
      },
      {
        conversation_id: 3,
        chat_history: {
          data: [
            {
              question: "Hi",
              response:
                "Short Answer:  Hello! 👋 How can I help you today? \n\nEntire Answer:  Hello!  I'm happy to help you today. How can I assist you with your PIXLIP needs? \n\nContext Language: English \n",
            },
            {
              question: "Who are You",
              response:
                "Short Answer: I am your PIXLIP sales agent.\n\nEntire Answer:  I am your dedicated PIXLIP sales agent, here to assist you with all your questions about our high-quality LED advertising surfaces. I am happy to provide you with product information, pricing, and customization options to help you make an informed decision.\n\nContext Language: English \n",
            },
            {
              question: "Who are You",
              response:
                "Short Answer: I am your PIXLIP sales assistant.\n\nEntire Answer: Hello! I am your dedicated PIXLIP sales assistant. I'm here to help you explore the incredible range of PIXLIP LED advertising surfaces and assist you in finding the perfect solution for your needs. \n\nContext Language: English \n",
            },
            {
              question: "How are you",
              response:
                "Short Answer:  I'm doing well, thank you. How can I help you today? \n\nEntire Answer: I'm doing great, thank you for asking! How can I help you with your PIXLIP needs today? \n\nContext Language: English \n",
            },
          ],
        },
      },
      {
        conversation_id: 6,
        chat_history: {
          data: [
            {
              question: "Hi",
              response:
                "Short Answer: Hello! 👋\n\nEntire Answer: Hello! How can I help you today? 😄\n\nContext Language: English \n",
            },
          ],
        },
      },
      {
        conversation_id: 7,
        chat_history: {
          data: [
            {
              question: "Hi",
              response:
                "Short Answer:  Hello! How can I help you today?\n\nEntire Answer:  Hello!  I'm happy to help.  What questions can I answer for you about PIXLIP products or services today? \n\nContext Language: English \n",
            },
          ],
        },
      },
      {
        conversation_id: 5,
        chat_history: {
          data: [
            {
              question: "Hi",
              response:
                "Short Answer: Hi there! 😊 How can I help you today?\n\nEntire Answer: Hi there! 😊  I'm happy to help you today. How can I assist you with your PIXLIP products or services?\n\nContext Language: English \n",
            },
            {
              question: "i want to generate booth design",
              response:
                "Short Answer: Okay, please tell me your website and the dimensions you want. \n\nEntire Answer:  Great!  To design a booth for you, I'll need a bit more information.  Please provide your website address and the desired dimensions for your booth.\n\nContext Language: English\n\nDimensions: None \n\nBooth Type: None\n\nWebsite: None \n",
            },
            {
              question: "here is my website",
              response:
                "Short Answer: Please provide your website and booth dimensions.\nEntire Answer:  Thank you for your website. Please provide your website and booth dimensions.\nContext Language: English\nWebsite: \nDimensions: \nBooth Type: \n",
            },
            {
              question: "here is my  website https://www.google.com/",
              response:
                "Short Answer:  Okay.\n\nEntire Answer: Okay, I am now extracting information from your website and will create a few booth designs for you.\n\nContext Language: English\n\nWebsite: https://www.google.com/ \n",
            },
            {
              question: "can you show me booth",
              response:
                "Short Answer:  I can't show you a booth, but you can view our virtual showroom on our website.\n\nEntire Answer: As a PIXLIP support assistant, I cannot show you a booth directly. However, you can explore our virtual showroom online for a visual representation of our products and how they can be used for booths.\n\nContext Language: English \n",
            },
            {
              question: "can you show me booth",
              response:
                "Short Answer: Sure, we can! \n\nEntire Answer:  You can view examples of our booths and how our systems are used in our showroom, which is at our headquarters in Hilden: Otto-Hahn-Strasse 11, 40721 Hilden. If you'd like to visit, feel free to contact us at info@PIXLIP.com.\n\nContext Language: English \n",
            },
            {
              question: "can you show me booth",
              response:
                "Short Answer: Our showroom is located in Hilden, Germany. \n\nEntire Answer: We would be happy to welcome you to our showroom in Hilden, Germany. You can get a first impression of our products virtually here. If you would like to visit us to see our PIXLIP products and have them explained to you by our experts, please feel free to contact us at: info@PIXLIP.com. \n\nContext Language: English \n",
            },
            {
              question: "can you show me booth",
              response: {
                Short_Answer:
                  " i can't show you a booth but i can give you more information about our products!\n\n",
                "Entire Answer":
                  " i am a pixlip support assistant and can't show you a booth. however, you can find more information about the products and their possible applications on our website. if you would like to visit us to see our pixlip products in person and get an explanation from our experts, please feel free to contact us at info@pixlip.com to schedule a visit to our showroom in hilden.\n\n",
                "Context Language:": " english \n",
              },
            },
            {
              question: "can you show me booth",
              response: {
                Short_Answer:
                  "  our showroom is located at our headquarters in hilden: otto-hahn-strasse 11, 40721 hilden. you are also welcome to take a look around our virtual showroom.\n\n",
                "Entire Answer":
                  "  you are most welcome to visit our showroom at our headquarters in hilden, germany. you can find us at otto-hahn-strasse 11, 40721 hilden. if you would like to get a closer look at our pixlip products and have them explained to you by our experts, please feel free to contact us at info@pixlip.com. you can also explore our virtual showroom online to see a variety of our products and their applications.\n\n",
                "Context Language:": " english \n",
              },
            },
            {
              question: "can you show me booth",
              response: {
                Short_Answer:
                  " of course, i can show you some examples of our booths. \n",
                "Entire Answer":
                  " you can find many examples of our booths on our website or our social media channels. there, you can see how pixlip products are used in different settings, and what kind of results you can achieve.\n",
                "Context Language:": " english \n",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <StyledSidebar>
      <StyledIconsContainer>
        <StyledAssetWrapper>
          <img src={pixlipLogo} alt="" />
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
