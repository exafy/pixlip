import styled from "@emotion/styled";
import { Slider } from "@mui/material";
import { useEffect, useState } from "react";
import { ColorCircle } from "../color-circle";
import { Button } from "../buttons";
import { CardComponentOutline } from "../card-component";
import { TabComponent } from "../tabs";
interface ConfiguratorProps {
  onControlChange: (data: any) => void;
}
export const ConfiguratorControls = ({
  onControlChange,
}: ConfiguratorProps) => {
  const [configuratorControls, setConfiguratorControls] = useState({
    height: 2,
    width: 3,
    length: 3,
    noOfWalls: 2,
    noOfCounters: 1,
  });

  useEffect(() => {
    onControlChange?.(configuratorControls);
  }, [configuratorControls]);

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
          onChange={(event: any) => {
            setConfiguratorControls((prevData) => ({
              ...prevData,
              length: event.target.value,
            }));
          }}
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
          onChange={(event: any) => {
            setConfiguratorControls((prevData) => ({
              ...prevData,
              width: event.target.value,
            }));
          }}
        />
      </StyledSlider>
      <StyledControlHeading>Height: 2 meters</StyledControlHeading>
      <StyledSlider>
        <Slider
          aria-label="Default"
          defaultValue={2}
          valueLabelDisplay="auto"
          shiftStep={1}
          step={0.25}
          marks
          min={2}
          max={2.5}
          onChange={(event: any) => {
            console.log(event.target.value);
            setConfiguratorControls((prevData) => ({
              ...prevData,
              height: event.target.value,
            }));
          }}
        />
      </StyledSlider>
      <StyledControlHeading>Wall</StyledControlHeading>
      <StyledTabs>
        <TabComponent
          id={1}
          isActive={configuratorControls.noOfWalls === 1}
          text="Head Stand"
          onClick={() => {
            setConfiguratorControls((prevData) => ({
              ...prevData,
              noOfWalls: 1,
            }));
          }}
        />
        <TabComponent
          id={2}
          isActive={configuratorControls.noOfWalls === 2}
          text="Corner Stand"
          onClick={() => {
            setConfiguratorControls((prevData) => ({
              ...prevData,
              noOfWalls: 2,
            }));
          }}
        />
        <TabComponent
          id={3}
          isActive={configuratorControls.noOfWalls === 3}
          text="Inline Stand"
          onClick={() => {
            setConfiguratorControls((prevData) => ({
              ...prevData,
              noOfWalls: 3,
            }));
          }}
        />
      </StyledTabs>
      <StyledControlHeading>Counter</StyledControlHeading>
      <StyledTabs>
        <TabComponent
          id={1}
          isActive={configuratorControls.noOfCounters === 1}
          text="Single Counter"
          onClick={() => {
            setConfiguratorControls((prevData) => ({
              ...prevData,
              noOfCounters: 1,
            }));
          }}
        />
        <TabComponent
          id={2}
          isActive={configuratorControls.noOfCounters === 2}
          text="Two Counters"
          onClick={() => {
            setConfiguratorControls((prevData) => ({
              ...prevData,
              noOfCounters: 2,
            }));
          }}
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
  &::placeholder {
    color: #9f9f9f;
    font-style: italic;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e5e5e5;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
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
