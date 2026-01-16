"use client";

import { Box, Button, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { MAIN_LAYOUT_CONTENT_PADDING_X } from "../layouts/MainLayout";
import OAKFeaturesGrid from "../content/OAKFeaturesGrid";
import OAKHero from "../content/heros/OAKHero";
import OAKRoboticsVision from "../content/OAKRoboticsVision";

const HomePage: FC = () => {
  const theme = useTheme();

  return (
    <>
      <OAKHero />

      <Box
        display="flex"
        flexDirection="column"
        gap={5}
        {...MAIN_LAYOUT_CONTENT_PADDING_X}
      >
        <Typography variant="h2" textAlign="center" fontWeight="bold">
          Why is OAK{" "}
          <Typography
            component="span"
            variant="h2"
            color="primary"
            fontWeight="bold"
          >
            one of the leading AI-powered hardware
          </Typography>{" "}
          in the industry?
        </Typography>

        <OAKFeaturesGrid
          containerSx={{
            backgroundColor: theme.palette.primary.dark,
          }}
        />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        gap={5}
        {...MAIN_LAYOUT_CONTENT_PADDING_X}
      >
        <Typography variant="h2" textAlign="center" fontWeight="bold">
          Robotics Vision Core 4{" "}
          <Typography
            component="span"
            variant="h2"
            color="primary"
            fontWeight="bold"
          >
            RCV4
          </Typography>
        </Typography>

        <OAKRoboticsVision />
      </Box>
    </>
  );
};

export default HomePage;
