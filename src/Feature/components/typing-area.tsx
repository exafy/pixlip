import styled from "@emotion/styled";
import { Icon } from "./icon";
import { useEffect, useRef } from "react";
import { text } from "stream/consumers";

export const TypingArea = () => {
  const textareaRef = useRef(null);
  useEffect(() => {
    const textarea = textareaRef.current as any;
    if (textarea) {
      const resizeTextarea = () => {
        if (textarea.scrollHeight < 120) {
          textarea.style.height = "auto";
          textarea.style.height = `${textarea.scrollHeight}px`;
          textarea["overflow-y"] = "scroll";
        } else {
          textarea["overflow-y"] = "hidden";
        }
      };

      resizeTextarea();
      textarea.addEventListener("input", resizeTextarea);
      return () => {
        textarea.removeEventListener("input", resizeTextarea);
      };
    }
  }, []);
  return (
    <StyledSendMessageContainer>
      <IconsContainer>
        <Icon size="xx-large" name="photo_camera" />
        <Icon size="xx-large" name="image" />
        <Icon size="xx-large" name="description" />
      </IconsContainer>
      <StyledCardContainer>
        <TypingAreaContainer
          ref={textareaRef}
          placeholder="Type here or click mic to talk with me..."
        />
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
  align-items: flex-end;
  gap: 10px;
  position: fixed;
  bottom: 20px;
  width: calc(100vw - 600px);
  justify-content: space-between;
`;

const IconsContainer = styled.div`
  display: flex;
`;

const TypingAreaContainer = styled.textarea`
  color: #000000;
  font-family: Roboto;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.16px;
  margin-top: 12px;
  background: transparent;
  transition: 0.4s;
  resize: none;
  position: relative;
  overflow-y: overlay;
  overflow-x: hidden;
  min-height: 20px;
  max-height: 200px;
  &::placeholder {
    color: #9f9f9f;
    font-style: italic;
    font-weight: 100;
  }
`;

const StyledCardContainer = styled.div`
  border-radius: 30px;
  border: 2px solid #000;
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px 0 20px;
`;
