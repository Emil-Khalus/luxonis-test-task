import { getCommonTransitionFor } from "@/src/utils/mui";
import {
  Box,
  Card,
  CardContent,
  CardProps,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";
import { FC, ReactElement } from "react";

interface IBaseCard extends CardProps {
  title?: string;
  icon?: ReactElement;
  iconAnchor?: "left" | "right";
  actions?: ReactElement;
  slotProps?: {
    header?: {
      sx?: SxProps;
    };
    actions?: {
      sx?: SxProps;
    };
  };
}

const BaseCard: FC<IBaseCard> = ({
  title,
  icon,
  iconAnchor = "left",
  children,
  actions,
  slotProps,
  ...props
}) => {
  const theme = useTheme();
  return (
    <Card
      {...props}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 5,
        borderRadius: theme.shape.radius.xs,
        backgroundColor: theme.palette.background.transparentWhite,
        gap: 3,

        ":hover": {
          transform: "translateY(-3px)",
          cursor: "pointer",
        },
        ...getCommonTransitionFor(["transform"]),

        ...props.sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 4,
          alignItems: "center",
        }}
      >
        {iconAnchor === "left" && icon}
        {title && (
          <Typography variant="subtitle1" fontWeight="bold">
            {title}
          </Typography>
        )}
        {iconAnchor === "right" && icon}
      </Box>

      {actions && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            width: { xs: "100%", md: "fit-content" },

            [theme.breakpoints.down("md")]: {
              "& > *": {
                flexGrow: 1,
                width: "100%",
              },
            },

            ...(slotProps?.actions?.sx || {}),
          }}
        >
          {actions}
        </Box>
      )}

      {children && <CardContent sx={{ padding: 0 }}>{children}</CardContent>}
    </Card>
  );
};

export default BaseCard;
