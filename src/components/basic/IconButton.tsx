import { FC } from "react";
import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
  useTheme,
} from "@mui/material";
import { IconButtonColorVariants } from "@/src/utils/mui";

interface IIconButtonProps extends MuiIconButtonProps {
  bgColor?: IconButtonColorVariants;
}

const IconButton: FC<IIconButtonProps> = ({ bgColor, children, ...props }) => {
  const theme = useTheme();
  return (
    <MuiIconButton
      {...props}
      sx={{
        ...(bgColor && {
          backgroundColor: theme.palette?.[bgColor].main,
          ":hover": {
            backgroundColor: theme.palette?.[bgColor].light,
          },
        }),
        ...props.sx,
      }}
    >
      {children}
    </MuiIconButton>
  );
};

export default IconButton;
