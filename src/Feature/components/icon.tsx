import styled from "@emotion/styled";

interface IconProps {
  name: string;
  size?: string;
  disable?: boolean;
  color?: string;
  onClick?: () => void;
}
export const Icon = ({
  name,
  size,
  disable = false,
  color = "#000000",
  onClick,
}: IconProps) => {
  const props: any = {};

  if (size) {
    props.size = size;
  }
  return (
    <StyledIcon
      className="material-icons-round"
      disbabled={disable}
      color={color}
      onClick={() => {
        if (!disable) {
          onClick?.();
        }
      }}
      {...props}
    >
      {name}
    </StyledIcon>
  );
};
interface IconDesignProps {
  size: number;
  disbabled: boolean;
  color: string;
}
const StyledIcon = styled.span<IconDesignProps>`
  &.material-icons-round {
    color: ${(props) => (props.disbabled ? "#9F9F9F" : props.color)};
    cursor: pointer;
    font-size: ${(props) => (props.size ? props.size : "unset")};
  }
`;
