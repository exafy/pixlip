import styled from "@emotion/styled";
import { Icon } from "./icon";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export const SendFirstMessageCard = () => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current as any;
    if (textarea) {
      const resizeTextarea = () => {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      };

      resizeTextarea();
      textarea.addEventListener("input", resizeTextarea);
      return () => {
        textarea.removeEventListener("input", resizeTextarea);
      };
    }
  }, []);
  const navigate = useNavigate();
  return (
    <StyledCardContainer>
      <TypingAreaContainer
        ref={textareaRef}
        placeholder="Type here or click mic to talk with me..."
      />
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
  height: 50px;
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
  &::placeholder {
    color: #9f9f9f;
    font-style: italic;
    font-weight: 400;
  }
`;
const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const IconsContainer = styled.div`
  display: flex;
`;
