import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
interface ButtonProps extends PropsWithChildren {
  variant?: "filled" | "outline";
  width?: string;
  onClick?: () => void;
}
export const Button = ({
  variant = "outline",
  width = "100%",
  children,
  onClick,
}: ButtonProps) => {
  const StyledVariant =
    variant === "outline" ? StyledButtonBorder : StyledButtonFilled;
  return (
    <StyledVariant
      width={width}
      onClick={() => {
        onClick?.();
      }}
    >
      {children}
    </StyledVariant>
  );
};
interface buttonPropetiesProp {
  width: string;
}

const StyledButtonBorder = styled.button<buttonPropetiesProp>`
  border: 1px solid #000;
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 20px;
  padding: 12px;
  background: #ffffff;
  cursor: pointer;
  transition: 0.4s;
  width: ${(props) => (props.width ? props.width : "100%")};
  &:hover {
    background: #000;
    color: #fff;
  }
`;

const StyledButtonFilled = styled.button<buttonPropetiesProp>`
  border: none;
  color: #ffffff;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: #000000;
  border-radius: 20px;
  padding: 12px;
  cursor: pointer;
  transition: 0.4s;
  border: 1px solid #000;
  width: ${(props) => (props.width ? props.width : "100%")};
  &:hover {
    background: #fff;
    color: #000;
  }
`;
