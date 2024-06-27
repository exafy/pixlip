import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

export const Question = ({ children }: PropsWithChildren) => {
  return <StyledQuestionText>{children}</StyledQuestionText>;
};

const StyledQuestionText = styled.div`
  color: #141414;
  display: flex;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  height: fit-content;
  width: fit-content;
  margin-bottom: 30px;
`;
