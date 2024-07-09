import styled from "@emotion/styled";
import pixlipLogo from "../../assets/pixlip_logo_classic.svg";
import { ConfiguratorConversationBox } from "../components/configurator/configurator-conversation-box";
import { ConfiguratorControls } from "../components/configurator/configurator-controls";
import { Configurator3dLayout } from "../components/configurator/configurator-3d";
import { useEffect, useState } from "react";
interface ConfiguratorProps {
  data: any;
}
const sampleData = {
  conversation_id: 211,
  chat_history: {
    data: [
      {
        question: "hi",
        response: {
          Walls: null,
          Width: null,
          Height: null,
          Length: null,
          Website: null,
          Language: "English ",
          Short_Answer: null,
          Entire_Answer: null,
        },
      },
      {
        question:
          "corner size height 2 width 2 length 2 and here is the website https://exafy.io",
        response: {
          Walls: "2",
          Width: "2m ",
          Height: "2m",
          Length: "2m",
          Website: "https://exafy.io",
          Language: "English",
          Short_Answer:
            "Thank you for providing website! I am generating some designs for you.",
          Entire_Answer:
            "Thank you for providing website! I am generating some designs for you.",
        },
      },
    ],
  },
  booth_url: {
    data: [
      {
        image_path: "media/booths/211/threads_img0.png",
        is_selected: true,
      },
      {
        image_path: "media/booths/211/threads_img1.png",
        is_selected: false,
      },
      {
        image_path: "media/booths/211/threads_img2.png",
        is_selected: false,
      },
      {
        image_path: "media/booths/211/threads_img3.png",
        is_selected: false,
      },
    ],
  },
  color:
    "(16, 16, 16), (255, 196, 2), (238, 238, 238), (123, 195, 44), (255, 204, 3) \n",
  font_style:
    "\"Roboto, 'DM Sans', 'Inter', 'Font Awesome 5 Free', 'Font Awesome 5 Brands', Arial, Baskerville\" \n",
  image_colors: [],
  audio_file: "media/audio/211/77627834.wav",
};
interface ConfiguratorProps {
  data: any;
}
export const GoConfigurator = ({ data }: ConfiguratorProps) => {
  const [dimensions, setDimensions] = useState({
    height: 2,
    width: 3,
    length: 3,
    noOfWalls: 2,
    noOfCounters: 1,
  });

  return (
    <StyledConfiguratorLayout>
      <StyledConfiguratorSidePanel>
        <img height={43} width={200} src={pixlipLogo} alt="pixlipLogo" />
        <Configurator3dLayout
          height={dimensions.height}
          width={dimensions.width}
          length={dimensions.length}
          numberOfWall={dimensions.noOfWalls}
          numberOfCounter={dimensions.noOfCounters}
          wallImage={
            (data?.booth_url?.data[1].image_path as string)
              ? `https://backend.exafy.io/${data?.booth_url?.data[1].image_path}`
              : null
          }
        />
        <ConfiguratorConversationBox />
      </StyledConfiguratorSidePanel>
      <ConfiguratorControls
        onControlChange={(data) => {
          setDimensions(data);
        }}
      />
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
