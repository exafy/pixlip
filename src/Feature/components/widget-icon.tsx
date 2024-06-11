import styled from "@emotion/styled";
import pixlip from "../../assets/test1.gif";
interface WidgetIconProps {
  height?: string;
  width?: string;
  onClick?: () => void;
}
export const ConfiguratorLogo = ({
  height = "200px",
  width = "200px",
  onClick,
}: WidgetIconProps) => {
  return (
    <StyledIcon
      onClick={onClick}
      src={pixlip}
      height={height}
      width={width}
      alt="pixLipIcon"
    />
  );
};

const StyledIcon = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;
