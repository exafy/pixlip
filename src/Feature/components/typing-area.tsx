import styled from "@emotion/styled";
import { Icon } from "./icon";

export const TypingArea = () => {
  return (
    <StyledSendMessageContainer>
      <IconsContainer>
        <Icon size="xx-large" name="photo_camera" />
        <Icon size="xx-large" name="image" />
        <Icon size="xx-large" name="description" />
      </IconsContainer>
      <StyledCardContainer>
        <TypingAreaContainer placeholder="Type here or click mic to talk with me..." />
        <Icon name="send" onClick={() => {}} />
      </StyledCardContainer>
      <Icon size="xx-large" name="mic" />
    </StyledSendMessageContainer>
  );
};

const StyledSendMessageContainer = styled.div`
  display: flex;
  padding-left: 175px;
  padding-right: 175px;
  height: 100px;
  align-items: center;
  gap: 10px;
  position: fixed;
  bottom: 20px;
  width: calc(100vw - 600px);
  justify-content: space-between;
`;

const IconsContainer = styled.div`
  display: flex;
`;

const TypingAreaContainer = styled.input`
  height: inherit;
  color: #000000;
  font-family: Roboto;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 100;
  line-height: normal;
  letter-spacing: 0.16px;
  background: transparent;
  transition: 0.4s;
  resize: none;
  overflow: hidden;
  position: relative;
  &::placeholder {
    color: #9f9f9f;
    font-style: italic;
    font-weight: 400;
  }
`;

const StyledCardContainer = styled.div`
  border-radius: 30px;
  border: 2px solid #000;
  height: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
`;
