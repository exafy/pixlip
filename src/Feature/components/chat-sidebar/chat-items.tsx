import styled from "@emotion/styled";
import { Icon } from "../icon";
interface ChatItemProps {
  name: string;
  id: number;
  active?: boolean;
  onClick?: (id: number) => void;
}
export const ChatItem = ({
  name,
  id,
  active = false,
  onClick,
}: ChatItemProps) => {
  return (
    <StyledListItem
      active={active}
      onClick={() => {
        onClick?.(id);
      }}
    >
      <Icon color={active ? "#fff" : "#000"} name="question_answer" />
      <StyledConversationName active={active}>{name}</StyledConversationName>
    </StyledListItem>
  );
};

interface ChatProps {
  active: boolean;
}
const StyledListItem = styled.div<ChatProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  width: 220px;
  height: 25px;
  padding: 5px;
  background-color: ${(props) => (props.active ? "#000" : "#fff")};
`;
const StyledConversationName = styled.div<ChatProps>`
  color: ${(props) => (props.active ? "#fff" : "#000")};
  text-align: left;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  width: 200px;
  white-space: nowrap;
  font-weight: 400;
  overflow-x: hidden;
  line-height: normal;
  margin-left: 10px;
  text-overflow: ellipsis;
`;
