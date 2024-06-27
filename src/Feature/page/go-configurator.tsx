import styled from "@emotion/styled";
import pixlipLogo from "../../assets/pixlip_logo_classic.svg";
import { ConfiguratorConversationBox } from "../components/configurator/configurator-conversation-box";
import { ConfiguratorControls } from "../components/configurator/configurator-controls";

export const GoConfigurator = () => {
  return (
    <StyledConfiguratorLayout>
      <StyledConfiguratorSidePanel>
        <img src={pixlipLogo} alt="pixlipLogo" />
      </StyledConfiguratorSidePanel>
      <ConfiguratorBoothImageArea>
        <ConfiguratorConversationBox />
      </ConfiguratorBoothImageArea>
      <ConfiguratorControls></ConfiguratorControls>
    </StyledConfiguratorLayout>
  );
};

const StyledConfiguratorLayout = styled.div`
  display: flex;
  width: calc(100% - 40px);
  padding: 20px;
  height: calc(100vh - 40px);
`;

const StyledConfiguratorControls = styled.div`
  display: flex;
  width: 300px;
  overflow-y: overlay;
  height: calc(100vh - 40px);
  gap: 10px;
`;

const StyledConfiguratorSidePanel = styled.div`
  display: flex;
  width: 200px;
  height: calc(100vh - 40px);
  flex-direction: column;
`;
const ConfiguratorBoothImageArea = styled.div`
  display: flex;
  width: calc(100% - 500px);
`;
