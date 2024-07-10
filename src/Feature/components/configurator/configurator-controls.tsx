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
    width: 6,
    length: 6,
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
    { id: 1, message: "Join the new era of productivity!" },
    { id: 2, message: "Create Once – Integrate Anywhere" },
  ];

  const typography = [
    { id: 1, message: "Inter" },
    { id: 2, message: "DM Sans" },
  ];

  return (
    <StyledConfiguratorControls>
      <StyledHeading>GO Configurator</StyledHeading>
      <div style={{ marginBottom: "30px" }} />
      <StyledSmallHeading>Shape your booth</StyledSmallHeading>
      <StyledControlHeading>{`Length: ${configuratorControls.length} meters`}</StyledControlHeading>
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
      <StyledControlHeading>{`Width: ${configuratorControls.width} meters`}</StyledControlHeading>
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
      <StyledControlHeading>{`Height: ${configuratorControls.height} meters`}</StyledControlHeading>
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
      <div style={{ marginBottom: "30px" }} />
      <StyledSmallHeading>Customize your booth</StyledSmallHeading>
      <StyledControlHeading>Color</StyledControlHeading>
      <StyledColorContainer>
        {Colors.map((data) => (
          <ColorCircle
            color={data.color}
            isActive={data.isActive}
            key={data.color}
          />
        ))}
        <StyledControlButton>
          <Button width="fit-content" variant="filled">
            + Add color
          </Button>{" "}
        </StyledControlButton>
      </StyledColorContainer>

      <StyledControlHeading>Slogans</StyledControlHeading>
      {slogans.map((data) => (
        <CardComponentOutline onClick={() => {}} key={data.message}>
          {data.message}
        </CardComponentOutline>
      ))}
      <StyledControlButton>
        <Button width="fit-content" variant="filled">
          + Add slogan
        </Button>{" "}
      </StyledControlButton>

      <StyledControlHeading>Typography</StyledControlHeading>
      {typography.map((data) => (
        <CardComponentOutline onClick={() => {}} key={data.message}>
          {data.message}
        </CardComponentOutline>
      ))}
      <StyledControlButton>
        <Button width="fit-content" variant="filled">
          + Add typography
        </Button>
      </StyledControlButton>

      <StyledControlHeading>Image</StyledControlHeading>
      <StyledControlButton>
        <Button width="fit-content" variant="filled">
          + Add image
        </Button>
      </StyledControlButton>
      <div style={{ marginBottom: "30px" }} />
      <StyledSmallHeading>Customize your booth</StyledSmallHeading>
      <StyledPriceTax>RRP excl. VAT</StyledPriceTax>
      <StyledSmallPrice>8,840.00€ </StyledSmallPrice>
      <Button width="fit-content" variant="filled">
        Add to cart
      </Button>
    </StyledConfiguratorControls>
  );
};
const StyledControlButton = styled.div`
  button {
    border: none;
    background-color: #0071e3;
  }
  button:hover {
    border: 1px solid #0071e3;
    color: #0071e3;
  }
`;
const StyledPriceTax = styled.div`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px
  letter-spacing: 0.8px;
`;

const StyledConfiguratorControls = styled.div`
  display: flex;
  width: 325px;
  overflow-y: overlay;
  flex-direction: column;
  height: calc(100vh - 40px);
  gap: 20px;
  padding: 0 20px 0 0;
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
const StyledSmallPrice = styled.div`
  color: #171a20;
  text-align: center;
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
`;

const StyledControlHeading = styled.div`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
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
  border-bottom: 1px solid #000;
`;

const StyledColorContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;
