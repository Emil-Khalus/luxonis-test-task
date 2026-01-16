import { Box, SxProps } from "@mui/material";
import { FC } from "react";
import BaseCard from "../basic/BaseCard";
import IconInCircle from "../basic/IconInCircle";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import SettingsRemoteIcon from "@mui/icons-material/SettingsRemote";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import HealingIcon from "@mui/icons-material/Healing";
import SensorsIcon from "@mui/icons-material/Sensors";
import LanIcon from "@mui/icons-material/Lan";

interface IOAKFeaturesGridProps {
  containerSx?: SxProps;
}

const OAKFeaturesGrid: FC<IOAKFeaturesGridProps> = ({ containerSx }) => {
  const CARDS_CONTENT = [
    {
      icon: <IconInCircle icon={<SatelliteAltIcon fontSize="large" />} />,
      title: "Efficient Edge Vision",
      content: (
        <>
          Perform advanced vision tasks on-device, reducing latency and
          bandwidth demands - eliminate cloud expenses.
        </>
      ),
    },
    {
      icon: <IconInCircle icon={<SettingsRemoteIcon fontSize="large" />} />,
      title: "Open Access, Full Control",
      content: (
        <>
          With our open-source DepthAI API, create and deploy custom vision
          solutions that scale with your needs.
        </>
      ),
    },
    {
      icon: <IconInCircle icon={<AccountTreeIcon fontSize="large" />} />,
      title: "Real-World Training Data",
      content: (
        <>
          Automatically adapt models with real-world data, enabling
          self-improving vision intelligence across your fleet.
        </>
      ),
    },
    {
      icon: <IconInCircle icon={<HealingIcon fontSize="large" />} />,
      title: "Self Healing",
      content: (
        <>
          Operates flawlessly through vibrations, temperature shifts, and
          extended use-recalibrate on the fly for dependable accuracy.
        </>
      ),
    },
    {
      icon: <IconInCircle icon={<SensorsIcon fontSize="large" />} />,
      title: "Edge Sensor Fusion",
      content: (
        <>
          Integrate advanced sensing capabilities with up to 48MP cameras, wide
          field of view, IMUs, microphones, ToF, thermal, IR illumination, and
          active stereo for unparalleled perception.
        </>
      ),
    },
    {
      icon: <IconInCircle icon={<LanIcon fontSize="large" />} />,
      title: "Seamless Integration",
      content: (
        <>
          Easily integrate with existing systems using industry-standard
          interfaces, APIs, and protocols – delivering plug-and-play
          compatibility for rapid deployment.
        </>
      ),
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        justifyContent: "center",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        },
        ...containerSx,
      }}
    >
      {CARDS_CONTENT.map((card, index) => (
        <BaseCard key={`feature-${index}`} title={card.title} icon={card.icon}>
          {card.content}
        </BaseCard>
      ))}
    </Box>
  );
};

export default OAKFeaturesGrid;
