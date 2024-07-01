import styled from "@emotion/styled";
interface Tabprops extends ItemSelected {
  onClick: (data: ItemSelected) => void;
}
interface ItemSelected {
  isActive: boolean;
  text: string;
  id: number;
}
export const TabComponent = ({ isActive, text, id, onClick }: Tabprops) => {
  return (
    <StyledTab
      isActive={isActive}
      onClick={() => onClick?.({ id, isActive, text })}
    >
      <TabText isActive={isActive}>{text}</TabText>
    </StyledTab>
  );
};

interface TabActiveInterface {
  isActive: boolean;
}
const StyledTab = styled.div<TabActiveInterface>`
  display: flex;
  height: fit-content;
  width: fit-content;
  align-items: center;
  border-bottom: 3px solid ${(props) => (props.isActive ? "#000" : "#fff")};
`;
const TabText = styled.div<TabActiveInterface>`
  font-family: Roboto;
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-weight: ${(props) => (props.isActive ? "500" : "400")};
  flex: 1 0 0;
`;
