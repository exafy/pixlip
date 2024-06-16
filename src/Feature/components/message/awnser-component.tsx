import styled from "@emotion/styled";
import { Icon } from "../icon";

export const Awnser = () => {
  return (
    <StyledAwnserLayout>
      <StyledAwnserIcon>
        <Icon name="message" size="xxl-large" />
      </StyledAwnserIcon>
    </StyledAwnserLayout>
  );
};

const StyledAwnserLayout = styled.div`
  display: flex;
  flex-direction: columns;
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
`;
