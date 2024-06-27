import styled from "@emotion/styled";
import { Slider, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { ColorCircle } from "../color-circle";
import { Button } from "../buttons";
import { CardComponent } from "../card-component";

export const ConfiguratorControls = () => {
  const [activeStep, setActiveStep] = useState(1);
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
    { color: "#FFFFFF", isActive: true },
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
  return (
    <StyledConfiguratorControls>
      <StyledHeading>GO Configurator</StyledHeading>
      <StyledSmallHeading>Shape your booth</StyledSmallHeading>
      <StyledControlHeading>Length: 6 meters</StyledControlHeading>
      <StyledSLider>
        <Slider
          defaultValue={6}
          color="primary"
          aria-label="Default"
          valueLabelDisplay="auto"
          min={1}
          max={12}
          step={1}
        />
      </StyledSLider>
      <StyledControlHeading>Width: 6 meters</StyledControlHeading>
      <StyledSLider>
        <Slider
          defaultValue={6}
          color="primary"
          aria-label="Default"
          valueLabelDisplay="auto"
          min={1}
          max={12}
          step={1}
        />
      </StyledSLider>
      <StyledControlHeading>Height: 2 meters</StyledControlHeading>
      <StyledSLider>
        <Slider
          defaultValue={2}
          color="primary"
          aria-label="Default"
          valueLabelDisplay="auto"
          marks={marks}
          max={4}
        />
      </StyledSLider>
      <StyledControlHeading>Wall</StyledControlHeading>
      <Tabs
        value={activeStep}
        onChange={() => {}}
        aria-label="basic tabs example"
      >
        <StyledTabs>
          <Tab
            onClick={() => {
              setActiveStep(1);
            }}
            value={1}
            label="Head Stand"
          />
        </StyledTabs>
        <StyledTabs>
          <Tab
            value={2}
            onClick={() => {
              setActiveStep(2);
            }}
            label="Corner Stand"
          />
        </StyledTabs>
        <StyledTabs>
          <Tab
            value={3}
            onClick={() => {
              setActiveStep(3);
            }}
            label="Inline Stand"
          />
        </StyledTabs>
      </Tabs>

      <StyledControlHeading>Counter</StyledControlHeading>
      <Tabs value={0} onChange={() => {}} aria-label="basic tabs example">
        <StyledTabs>
          <Tab value={1} label="Single Counter" />
        </StyledTabs>

        <StyledTabs>
          <Tab value={2} label="Single Counter" />
        </StyledTabs>
      </Tabs>

      <StyledControlHeading>Color</StyledControlHeading>
      <StyledColorContainer>
        {Colors.map((data) => (
          <ColorCircle color={data.color} isActive={data.isActive} />
        ))}
        <Button variant="filled">+ Add logo</Button>
      </StyledColorContainer>
      <StyledControlHeading>Slogans</StyledControlHeading>
      {slogans.map((data) => (
        <CardComponent  onClick={() => {}} key={data.message}>
          {data.message}
        </CardComponent>
      ))}
    </StyledConfiguratorControls>
  );
};

const StyledConfiguratorControls = styled.div`
  display: flex;
  width: 300px;
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

const StyledSLider = styled.div`
  .MuiSlider-root {
    color: #000000;
  }
  width: 250px;
`;

const StyledTabs = styled.div`
  .css-1t2y591 {
    button {
      color: #000000;
    }
    span {
      color: #000000;
    }
  }
`;

const StyledColorContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;
