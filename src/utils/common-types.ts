import { ReactElement } from "react";

export type LinkType = {
  label: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  onClick?: () => void;
  preventDefault?: boolean;
  ariaLabel?: string;
  endIcon?: ReactElement;
  startIcon?: ReactElement;
};
