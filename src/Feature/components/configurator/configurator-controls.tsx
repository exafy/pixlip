import styled from "@emotion/styled";
import { Slider } from "@mui/material";
import { useState } from "react";
import { ColorCircle } from "../color-circle";
import { Button } from "../buttons";
import { CardComponentOutline } from "../card-component";
import { TabComponent } from "../tabs";
interface ConfiguratorProps {
  onControlChange: () => void;
}
export const ConfiguratorControls = ({
  onControlChange,
}: ConfiguratorProps) => {
  const [activeWall, setActiveWall] = useState<number | null>(2);
  const [activeCounter, setActiveCounter] = useState<number | null>(1);
  const [configuratorControls, setConfiguratorControls] = useState({
    height: 4,
    width: 12,
    length: 12,
    noOfWalls: 2,
    noOfCounters: 1,
  });
  const marks = [
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
  ];

  const Colors = [
    { color: "#FFFFFF", isActive: false },
    { color: "#5D739C", isActive: false },
    { color: "#D8D8D8", isActive: false },
    { color: "#00B0F0", isActive: false },
    { color: "#0058DD", isActive: false },
    { color: "#000000", isActive: false },
  ];

  const slogans = [
    { id: 1, message: "Show me what PIXLIP AI can do" },
    { id: 2, message: "I need help designing my booth" },
    { id: 3, message: "How can PIXLIP enhance my booth design" },
    { id: 4, message: "What is the shipping cost" },
  ];

  const typography = [
    { id: 1, message: "Inter" },
    { id: 2, message: "DM Sans" },
  ];

  const handleWallClick = (id: number) => {
    setActiveWall(id);
  };

  const handleCounterClick = (id: number) => {
    setActiveCounter(id);
  };

  return (
    <StyledConfiguratorControls>
      <StyledHeading>GO Configurator</StyledHeading>
      <StyledSmallHeading>Shape your booth</StyledSmallHeading>
      <StyledControlHeading>Length: 6 meters</StyledControlHeading>
      <StyledSlider>
        <Slider
          defaultValue={6}
          color="primary"
          aria-label="Default"
          valueLabelDisplay="auto"
          min={1}
          max={12}
          step={1}
        />
      </StyledSlider>
      <StyledControlHeading>Width: 6 meters</StyledControlHeading>
      <StyledSlider>
        <Slider
          defaultValue={6}
          color="primary"
          aria-label="Default"
          valueLabelDisplay="auto"
          min={1}
          max={12}
          step={1}
        />
      </StyledSlider>
      <StyledControlHeading>Height: 2 meters</StyledControlHeading>
      <StyledSlider>
        <Slider
          defaultValue={1}
          color="primary"
          aria-label="Default"
          valueLabelDisplay="auto"
          marks={marks}
          max={2.5}
          min={1}
        />
      </StyledSlider>
      <StyledControlHeading>Wall</StyledControlHeading>
      <StyledTabs>
        <TabComponent
          id={1}
          isActive={activeWall === 1}
          text="Head Stand"
          onClick={() => handleWallClick(1)}
        />
        <TabComponent
          id={2}
          isActive={activeWall === 2}
          text="Corner Stand"
          onClick={() => handleWallClick(2)}
        />
        <TabComponent
          id={3}
          isActive={activeWall === 3}
          text="Inline Stand"
          onClick={() => handleWallClick(3)}
        />
      </StyledTabs>
      <StyledControlHeading>Counter</StyledControlHeading>
      <StyledTabs>
        <TabComponent
          id={1}
          isActive={activeCounter === 1}
          text="Single Counter"
          onClick={() => handleCounterClick(1)}
        />
        <TabComponent
          id={2}
          isActive={activeCounter === 2}
          text="Two Counters"
          onClick={() => handleCounterClick(2)}
        />
      </StyledTabs>

      <StyledHeading>Customize your booth</StyledHeading>
      <StyledControlHeading>Color</StyledControlHeading>
      <StyledColorContainer>
        {Colors.map((data) => (
          <ColorCircle
            color={data.color}
            isActive={data.isActive}
            key={data.color}
          />
        ))}
        <Button variant="filled">+ Add logo</Button>
      </StyledColorContainer>

      <StyledControlHeading>Slogans</StyledControlHeading>
      {slogans.map((data) => (
        <CardComponentOutline onClick={() => {}} key={data.message}>
          {data.message}
        </CardComponentOutline>
      ))}
      <Button variant="filled">+ Add slogan</Button>
      <StyledControlHeading>Typography</StyledControlHeading>
      {typography.map((data) => (
        <CardComponentOutline onClick={() => {}} key={data.message}>
          {data.message}
        </CardComponentOutline>
      ))}
      <Button variant="filled">+ Add Typography</Button>
      <StyledControlHeading>Image</StyledControlHeading>
      <Button variant="filled">+ Add image</Button>
    </StyledConfiguratorControls>
  );
};

const StyledConfiguratorControls = styled.div`
  display: flex;
  width: 325px;
  overflow-y: overlay;
  flex-direction: column;
  height: calc(100vh - 40px);
  gap: 10px;
  align-items: center;
`;

const StyledHeading = styled.div`
  color: #171a20;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
`;

const StyledSmallHeading = styled.div`
  color: #171a20;
  text-align: center;
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px;
`;

const StyledControlHeading = styled.div`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const StyledSlider = styled.div`
  .MuiSlider-root {
    color: #000000;
  }
  width: 250px;
`;

const StyledTabs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  width: 100%;
`;

const StyledColorContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;
