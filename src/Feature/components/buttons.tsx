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
  padding: 10px;
  background: #ffffff;
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : "100%")};
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
  padding: 10px;
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : "100%")};
`;
