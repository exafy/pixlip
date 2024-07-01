import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { Icon } from "../icon";

export const ConfiguratorConversationBox = () => {
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
        <Icon size="xx-large" name="undo" />
        <Icon size="xx-large" name="redo" />
        <Icon size="xx-large" name="restart_alt" />
        <Icon size="xx-large" name="share" />
      </IconsContainer>
      <StyledCardContainer>
        <TypingAreaContainer
          ref={textareaRef}
          placeholder="Type here or click mic to talk with me..."
        />
        <Icon size="xx-large" name="send" onClick={() => {}} />
      </StyledCardContainer>
      <StyledMicIcon>
        <Icon size="xx-large" name="mic" />
      </StyledMicIcon>
    </StyledSendMessageContainer>
  );
};

const StyledSendMessageContainer = styled.div`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  height: fit-content;
  align-items: flex-end;
  gap: 10px;
  position: fixed;
  bottom: 20px;
  left: 0;
  width: calc(100vw - 400px);
  justify-content: space-between;
`;

const IconsContainer = styled.div`
  display: flex;
  height: 50px;
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
  min-height: 20px;
  max-height: 200px;
  &::placeholder {
    color: #9f9f9f;
    font-style: italic;
    font-weight: 100;
  }
`;
const StyledMicIcon = styled.div`
  height: 50px;
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
