import styled from "@emotion/styled";
import { Icon } from "./icon";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

interface SendFirstMessageCardProps {
  onChange: (value: string) => void;
  onSubmit: () => void;
  value?: string;
}
export const SendFirstMessageCard = ({
  onChange,
  onSubmit,
  value,
}: SendFirstMessageCardProps) => {
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
    const handleOnSubmit = () => {
      onSubmit();
      setValues("");
    };
    const handleKeyDown = (event: any) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        handleOnSubmit();
      }
    };
    return (
      <StyledCardContainer>
        <TypingAreaContainer
          {...props}
          ref={textareaRef}
          placeholder="Type here or click mic to talk with me..."
          onChange={(event: any) => {
            setDisableSend(event.target.value === "");
            onChange(event.target.value);
            setValues(event.target.value);
          }}
          onKeyUp={(event: any) => {
            handleKeyDown(event);
          }}
        />
        <ActionButtonContainer>
          <IconsContainer>
            <Icon size="xx-large" name="mic" />

            <Icon size="xx-large" name="photo_camera" />

            <Icon size="xx-large" name="image" />
            <Icon size="xx-large" name="description" />
          </IconsContainer>
          <Icon
            name="send"
            size="x-large"
            disable={disableSend}
            onClick={() => {
              onSubmit();
              setValues("");
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
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.16px;
  background: transparent;
  transition: 0.4s;
  resize: none;
  &::placeholder {
    color: #9f9f9f;
    font-style: italic;
    font-weight: 100;
  }
`;
const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const IconsContainer = styled.div`
  display: flex;
  gap: 5px;
`;
