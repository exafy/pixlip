import styled from "@emotion/styled";

interface IconProps {
  name: string;
  size?: string;
  disable?: boolean;
  onClick?: () => void;
}
export const Icon = ({ name, size, disable = false, onClick }: IconProps) => {
  const props: any = {};

  if (size) {
    props.size = size;
  }
  return (
    <StyledIcon
      className="material-icons-round"
      disbabled={disable}
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
}
const StyledIcon = styled.span<IconDesignProps>`
  &.material-icons-round {
    color: ${(props) => (props.disbabled ? "#9F9F9F" : "#000000")};
    cursor: pointer;
    font-size: ${(props) => (props.size ? props.size : "unset")};
  }
`;
