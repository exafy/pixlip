import styled from "@emotion/styled";
import { Icon } from "../icon";
import { Button } from "../buttons";
import { TypeAnimation } from "react-type-animation";
interface AwnserProps {
  awnser: string;
  type?: "text" | "button";
  buttonText?: string;
  onClick?: () => void;
}
export const Awnser = ({
  awnser,
  type = "text",
  buttonText,
  onClick,
}: AwnserProps) => {
  return (
    <StyledAwnserLayout>
      <StyledAwnserIcon>
        <Icon name="message" size="xxl-large" />
        <StyledAwnserText>Answer</StyledAwnserText>
      </StyledAwnserIcon>
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

      {/* <StyledAnswer>{awnser}</StyledAnswer> */}
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
    </StyledAwnserLayout>
  );
};

const StyledAwnserLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: fit-content;
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
