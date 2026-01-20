"use client";

import { Box, keyframes, Theme, Typography } from "@mui/material";
import { FC, useState } from "react";
import Player from "next-video/player";
import OAKD5Img from "../../../../public/OAK_D_5.webp";
import Image from "next/image";
import { TextStaggeredFade } from "../../basic/animatation/TextStaggeredFade";
import { MAIN_LAYOUT_CONTENT_PADDING_X } from "../../layouts/MainLayout";

const dropIn = keyframes`
  from { transform: translateY(-200px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
`;

const OAKHero: FC = () => {
  const [imageDone, setImageDone] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: (theme: Theme) => theme.palette.background.darkBlue,
      }}
    >
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <Player
          src="/hero-background.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: "rgba(0, 0, 0, 0.6)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          ...MAIN_LAYOUT_CONTENT_PADDING_X,
        }}
      >
        <Box
          onAnimationEnd={() => setImageDone(true)}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            textAlign: { xs: "center", lg: "start" },
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: { xs: 20, lg: 30 },
            overflow: "hidden",
            animation: `${dropIn} 2000ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards`,
          }}
        >
          <Typography variant="h1" fontWeight="bold">
            Luxonis{" "}
            <Box component="br" sx={{ display: { xs: "none", lg: "flex" } }} />
            OAK 4 D
          </Typography>

          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", sm: 520, md: 620, lg: 660 },
              maxWidth: "100%",
              aspectRatio: "660 / 415",
              flexShrink: 0,
            }}
          >
            <Image
              src={OAKD5Img}
              alt="OAK4D"
              fill
              priority
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 520px, (max-width: 1200px) 620px, 660px"
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>

        <TextStaggeredFade text="A look into the future" start={imageDone} />
      </Box>
    </Box>
  );
};

export default OAKHero;
