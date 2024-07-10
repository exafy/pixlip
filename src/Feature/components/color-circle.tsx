import styled from "@emotion/styled";
interface ColorProps {
  isActive: boolean;
  color: string;
}
export const ColorCircle = ({ isActive, color }: ColorProps) => {
  return <StyledCircleColor color={color} />;
};
interface ColorInterface {
  color: string;
}
const StyledCircleColor = styled.div<ColorInterface>`
  width: 36px;
  height: 36px;
  display: flex;
  border-radius: 50%;
  background-color: ${(props) => (props.color ? props.color : "#ffffff")};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
`;
