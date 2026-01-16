import { Breakpoint } from "@mui/material";
import theme from "../theme";

export type IconButtonColorVariants = "primary" | "secondary";

export type ValuesByBreakpoints = Partial<Record<Breakpoint, number | string>>;
export type ValueOrValueByBreakpoints = number | string | ValuesByBreakpoints;

export const getCommonTransitionFor = (props?: string | string[]) => {
  return {
    transition: theme.transitions.create(props ?? "all", {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeOut,
    }),
  };
};
