import { Box, Button, Theme } from "@mui/material";
import { FC } from "react";
import BaseCard from "../basic/BaseCard";
import Carousel from "../basic/Carousel";
import OAKD1Img from "../../../public/OAK_D_1.webp";
import OAKD2Img from "../../../public/OAK_D_2.webp";
import OAKD3Img from "../../../public/OAK_D_3.webp";
import OAKD4Img from "../../../public/OAK_D_4.webp";
import Link from "next/link";
import { RVC4_CHARACTERISTICS_DOC } from "@/src/utils/common-links";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const OAKRoboticsVision: FC = () => {
  const CARDS_CONTENT = [
    "6-core ARMv8 CPU running Linux",
    "AI: 48 INT8, 12 FP16 TOPS",
    "GPU: 4 FP16 TOPS",
    "ISP: 5 camera streams, HDR, EIS, 3A",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: 4,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box display="flex" flexDirection="column" gap={2} flex={1} width="100%">
        {CARDS_CONTENT.map((title, index) => (
          <BaseCard key={`vision-characteristich-${index}`} title={title} />
        ))}
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        flex={1}
        justifyContent="end"
        alignItems="center"
      >
        <Carousel
          slides={[
            { src: OAKD1Img, alt: "OAK" },
            { src: OAKD2Img, alt: "OAK" },
            { src: OAKD3Img, alt: "OAK" },
            { src: OAKD4Img, alt: "OAK" },
          ]}
        />
        <Button
          component={Link}
          href={RVC4_CHARACTERISTICS_DOC}
          target="_blank"
          sx={{
            maxWidth: 600,
            borderRadius: (theme: Theme) => theme.shape.radius.sm,
          }}
          fullWidth
          endIcon={<ArrowOutwardIcon />}
        >
          See full description
        </Button>
      </Box>
    </Box>
  );
};

export default OAKRoboticsVision;
