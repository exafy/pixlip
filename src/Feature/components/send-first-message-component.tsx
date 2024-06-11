import styled from "@emotion/styled";
import { Icon } from "./icon";
import { useNavigate } from "react-router-dom";

export const SendFirstMessageCard = () => {
  const navigate = useNavigate();
  return (
    <StyledCardContainer>
      <TypingAreaContainer placeholder="Type here or click mic to talk with me..." />
      <ActionButtonContainer>
        <IconsContainer>
          <Icon name="mic" />
          <Icon name="photo_camera" />
          <Icon name="image" />
          <Icon name="description" />
        </IconsContainer>
        <Icon
          name="send"
          onClick={() => {
            navigate("conversation/1");
          }}
        />
      </ActionButtonContainer>
    </StyledCardContainer>
  );
};

const StyledCardContainer = styled.div`
  border-radius: 20px;
  border: 1px solid #000000;
  width: calc(100vw - 680px);
  padding: 10px 20px 10px 20px;
  margin-bottom: 20px;
`;

const TypingAreaContainer = styled.textarea`
  text-decoration: italic;
  height: 50px;
  color: #141414;
  font-family: Roboto;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 20px;
  font-size: 16px;
  font-style: italic;
  font-weight: 100;
  line-height: normal;
  letter-spacing: 0.16px;
  background: transparent;
`;
const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const IconsContainer = styled.div`
  display: flex;
`;
