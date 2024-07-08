import styled from "@emotion/styled";
import { Icon } from "../icon";
import { Button } from "../buttons";
import { TypeAnimation } from "react-type-animation";
import { ShimmerText } from "shimmer-effects-react";

interface AwnserProps {
  awnser: string;
  type?: "text" | "button";
  buttonText?: string;
  isAnimated: boolean;
  media: string;
  onClick?: () => void;
}
export const Awnser = ({
  awnser,
  type = "text",
  buttonText,
  isAnimated,
  media,
  onClick,
}: AwnserProps) => {
  return (
    <StyledAwnserLayout>
      <StyledAnswerWrapper>
        <StyledAwnserIcon>
          <Icon name="message" size="xxl-large" />
          <StyledAwnserText>Answer</StyledAwnserText>
        </StyledAwnserIcon>
        {isAnimated ? (
          <TypeAnimation
            splitter={(str) => str.split(/(?= )/)}
            sequence={[awnser, 2500]}
            omitDeletionAnimation={false}
            wrapper="div"
            cursor={false}
            repeat={Infinity}
            style={{
              color: "#000",
              display: "flex",
              fontFamily: "Roboto",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              letterSpacing: " -0.28px",
              marginBottom: "10px",
              marginTop: "30px",
            }}
          />
        ) : (
          <StyledAnswer>{awnser}</StyledAnswer>
        )}
        {type === "button" && (
          <Button
            width="154px"
            variant="filled"
            onClick={() => {
              onClick?.();
            }}
          >
            {buttonText}
          </Button>
        )}
      </StyledAnswerWrapper>

      {media && (
        <StyledMediaAnswer>
          <img width={50} height={50} src={media} />
        </StyledMediaAnswer>
      )}
    </StyledAwnserLayout>
  );
};

const StyledAwnserLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  width: 100%;
  justify-content: space-between;
`;

const StyledAwnserIcon = styled.div`
  display: flex;
`;

const StyledAnswer = styled.div`
  color: #000;
  display: flex;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  margin-bottom: 10px;
  margin-top: 30px;
`;
const StyledAwnserText = styled.div`
  color: #141414;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
  margin-left: 10px;
`;

const StyledMediaAnswer = styled.div`
  height: 200px;
  width: 357.043px;
  border-radius: 12px;
  background: #e5e5e5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledAnswerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-direction: column;
`;