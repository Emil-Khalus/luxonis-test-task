"use client";

import type { PropsWithChildren } from "react";
import { Box, CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { FC } from "react";
import Header from "../basic/Header";
import ScrollBox from "../basic/ScrollBox";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import theme from "@/src/theme";

export const MAIN_LAYOUT_CONTENT_PADDING_X = { paddingX: { xs: 2, md: 8 } };

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            maxWidth: (theme: Theme) => theme.mixins.rootLayout.maxWidth,
            marginX: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "fixed",
              width: "100%",
              top: 0,
              left: 0,
              zIndex: (theme: Theme) => theme.zIndex.appBar,
              ...MAIN_LAYOUT_CONTENT_PADDING_X,
            }}
          >
            <Header />
          </Box>
          <ScrollBox
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: 35,
              gap: (theme: Theme) => theme.mixins.rootLayout.commonSpacing,
            }}
          >
            {children}
          </ScrollBox>
        </Box>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default MainLayout;
