import { Box, SxProps, Theme } from "@mui/material";
import { FC, ReactElement } from "react";

interface IIconInCircleProps {
  icon: ReactElement;
  color?: string;
  sx?: SxProps;
}

const IconInCircle: FC<IIconInCircleProps> = ({
  icon,
  color = "primary.main",
  sx,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: 1.5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
        borderRadius: (theme: Theme) => theme.shape.radius.circle,
        ...sx,
      }}
    >
      {icon}
    </Box>
  );
};

export default IconInCircle;
