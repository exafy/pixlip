import styled from "@emotion/styled";
interface ColorProps {
  isActive: boolean;
  color: string;
}
export const ColorCircle = ({ isActive, color }: ColorProps) => {
  return <StyledCircleColor active={isActive} color={color} />;
};
interface ColorInterface {
  color: string;
  active: boolean;
}
const StyledCircleColor = styled.div<ColorInterface>`
  width: 49px;
  height: 49px;
  display: flex;
  border-radius: 50%;
  background-color: ${(props) => (props.color ? props.color : "#ffffff")};
  border: ${(props) =>
    props.active ? "1px solid #0071E3" : "1px solid #ffffff"};
`;
