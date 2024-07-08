import styled from "@emotion/styled";
import { Icon } from "./icon";
import { useEffect, useRef, useState } from "react";
interface TypingAreaProps {
  onChange: (value: string) => void;
  onSubmit: () => void;
  value?: string;
}
export const TypingArea = ({ onChange, onSubmit, value }: TypingAreaProps) => {
  const textareaRef = useRef(null);
  const [disableSend, setDisableSend] = useState(true);
  const [values, setValues] = useState(value as string);

  useEffect(() => {
    const textarea = textareaRef.current as any;
    if (textarea) {
      const resizeTextarea = () => {
        if (textarea.scrollHeight < 130) {
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

  const props: any = {};
  if (value) {
    props.value = value;
  }
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleOnSubmit();
    }
  };
  const handleOnSubmit = () => {
    onSubmit();
    setValues("");
  };
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
          onChange={(event: any) => {
            console.log(event);
            setDisableSend(event.target.value === "");
            onChange(event.target.value);
            setValues(event.target.value);
          }}
          placeholder="Type here or click mic to talk with me..."
          value={values}
          onKeyUp={(event: any) => {
            handleKeyDown(event);
          }}
        />
        <Icon
          name="send"
          size="x-large"
          disable={disableSend}
          onClick={() => {
            handleOnSubmit();
          }}
        />
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
  margin-bottom: 50px;
  bottom: 0;
  right: 0;
  width: calc(100vw - 600px);
  justify-content: space-between;
  background-color: #ffffff;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 8px;
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
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 20px;
  max-height: 200px;
  &::placeholder {
    color: #9f9f9f;
    font-style: italic;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e5e5e5;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`;

const StyledCardContainer = styled.div`
  border-radius: 30px;
  border: 1px solid #000;
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px 0 20px;
  background: #fff;
`;
