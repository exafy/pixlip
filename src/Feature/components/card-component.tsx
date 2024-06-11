import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
interface CardProps extends PropsWithChildren {
  onClick?: () => void;
}

export const CardComponent = ({ children, onClick }: CardProps) => {
  return (
    <StyledCard
      onClick={() => {
        onClick?.();
      }}
    >
      <StyledCardText>{children}</StyledCardText>
    </StyledCard>
  );
};
const StyledCardText = styled.div`
  color: #141414;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px;
`;
const StyledCard = styled.div`
  border-radius: 20px;
  border: 1px solid #000000;
  cursor: pointer;
`;
