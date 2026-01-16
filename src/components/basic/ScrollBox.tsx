import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

const ScrollBox: FC<BoxProps> = (props: BoxProps) => {
  return (
    <Box
      {...props}
      sx={{
        ...props.sx,
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#f0f0f0",
          borderRadius: "3px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#c1c1c1",
          borderRadius: "3px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#a0a0a0",
        },
        scrollbarWidth: "thin",
        scrollbarColor: "#c1c1c1 #f0f0f0",
      }}
    />
  );
};

export default ScrollBox;
