import styled from "@emotion/styled";
import pixlipLogo from "../../assets/pixlip_logo_classic.svg";
import { ConfiguratorConversationBox } from "../components/configurator/configurator-conversation-box";
import { ConfiguratorControls } from "../components/configurator/configurator-controls";
import { Configurator3dLayout } from "../components/configurator/configurator-3d";
import { useState } from "react";

export const GoConfigurator = () => {
  const [dimensions, setDimensions] = useState({
    height: 2,
    width: 4,
    length: 4,
    noOfWalls: 3,
  });
  return (
    <StyledConfiguratorLayout>
      <StyledConfiguratorSidePanel>
        <img height={43} width={200} src={pixlipLogo} alt="pixlipLogo" />
        <Configurator3dLayout
          height={dimensions.height}
          width={dimensions.width}
          length={dimensions.length}
          numberOfWall={1}
        />
        <ConfiguratorConversationBox />
      </StyledConfiguratorSidePanel>
      <ConfiguratorControls onControlChange={() => {}} />
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
  width: calc(100% - 300px);
  height: calc(100vh - 40px);
  flex-direction: column;
`;
const ConfiguratorBoothImageArea = styled.div`
  display: flex;
  width: calc(100% - 500px);
`;
