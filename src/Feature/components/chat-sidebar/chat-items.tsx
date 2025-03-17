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
      <StyledColor>
        <Icon name="question_answer" />
      </StyledColor>
      <StyledConversationName className="names" active={active}>
        {name}
      </StyledConversationName>
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
  width: 200px;
  height: 24px;
  padding: 5px;
  margin-right: 10px;
  gap: 8px;
  transition: 0.4s;
  &:hover {
    background-color: #000;
    .names {
      color: #fff;
    }
    div {
      .material-icons-round {
        color: #fff;
      }
    }
  }
  border: 1px solid ${(props) => (props.active ? "#000" : "#fff")};
`;
const StyledConversationName = styled.div<ChatProps>`
  color: #000;
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

const StyledColor = styled.div`
  .material-icons-round {
    color: #000;
  }
`;
