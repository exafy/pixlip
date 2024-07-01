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
      <StyledCardText className="card-text">{children}</StyledCardText>
    </StyledCard>
  );
};

export const CardComponentOutline = ({ children, onClick }: CardProps) => {
  return (
    <StyledCardOutline
      onClick={() => {
        onClick?.();
      }}
    >
      <StyledCardText className="card-text">{children}</StyledCardText>
    </StyledCardOutline>
  );
};
const StyledCardText = styled.div`
  color: #ffffff;
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
  background: #000000;
  transition: 0.4s;
  :hover {
    background: #ffffff;
    .card-text {
      color: #000000;
    }
  }
`;

const StyledCardOutline = styled.div`
  border-radius: 20px;
  cursor: pointer;
  background: #ffffff;
  transition: 0.4s;
  .card-text {
    color: #000000;
  }
`;

