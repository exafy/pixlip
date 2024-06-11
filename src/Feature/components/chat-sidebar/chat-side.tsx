import styled from "@emotion/styled";
import { Icon } from "../icon";
import { ConfiguratorLogo } from "../widget-icon";
import pixlipLogo from "../../../assets/pixlip_logo_classic.svg";
import { Button } from "../buttons";

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledIconsContainer>
        <img src={pixlipLogo} alt="" />
        <ConfiguratorLogo height="100px" width="100px" />
        <Button variant="outline">+ New chat</Button>
      </StyledIconsContainer>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 200px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  padding: 20px;
`;

const StyledIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
