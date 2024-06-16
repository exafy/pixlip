import styled from "@emotion/styled";

interface IconProps {
  name: string;
  size?: string;
  onClick?: () => void;
}
export const Icon = ({ name, size, onClick }: IconProps) => {
  const props: any = {};

  if (size) {
    props.size = size;
  }
  return (
    <StyledIcon
      className="material-icons"
      onClick={() => {
        onClick?.();
      }}
      {...props}
    >
      {name}
    </StyledIcon>
  );
};
interface IconDesignProps {
  size: number;
}
const StyledIcon = styled.span<IconDesignProps>`
  &.material-icons {
    color: #000000;
    cursor: pointer;
    font-size: ${(props) => (props.size ? props.size : "unset")};
  }
`;
