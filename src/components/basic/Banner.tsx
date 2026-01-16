import { Box, SxProps, useTheme } from "@mui/material";
import { FC, PropsWithChildren } from "react";

interface IBannerProps extends PropsWithChildren {
  sx?: SxProps;
}

const Banner: FC<IBannerProps> = ({ children, sx }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: theme.shape.radius.sm,
        padding: 4,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Banner;
