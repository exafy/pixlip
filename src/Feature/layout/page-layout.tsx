import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

export const PageLayout = ({ children }: PropsWithChildren) => {
  return <StyledLayout>{children}</StyledLayout>;
};
const StyledLayout = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  background: #ffffff;
`;
