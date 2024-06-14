import styled from "@emotion/styled";
import { Icon } from "../icon";
interface ChatItemProps {
  name: string;
  id: number;
  onClick?: () => void;
}
export const ChatItem = ({ name, id, onClick }: ChatItemProps) => {
  return (
    <StyledListItem
      onClick={() => {
        onClick?.();
      }}
    >
      <Icon name="question_answer" />
      <StyledConversationName>{name}</StyledConversationName>
    </StyledListItem>
  );
};

const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 35px;
`;
const StyledConversationName = styled.div`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 10px;
`;
