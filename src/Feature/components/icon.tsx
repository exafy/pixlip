import styled from "@emotion/styled";

interface IconProps {
  name: string;
  onClick?: () => void;
}
export const Icon = ({ name, onClick }: IconProps) => {
  return (
    <StyledIcon
      className="material-icons"
      onClick={() => {
        onClick?.();
      }}
    >
      {name}
    </StyledIcon>
  );
};

const StyledIcon = styled.span`
  &.material-icons {
    color: #000000;
    cursor: pointer;
  }
`;
