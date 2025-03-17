import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

export const CircularIndeterminate = () => {
  return (
    <StyledBackground>
      <StyledText>Loading your chat...</StyledText>
      <CircularProgress size={100} />
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  background: white;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  .MuiCircularProgress-root {
    color: #000;
  }
`;

const StyledText = styled.div`
  font-family: Roboto;
  display: flex;
  font-size: 24px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;
