"use client";

import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface ILogoProps {
  src: StaticImageData | string;
  alt?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  onClick?: () => void;
}

const Logo: FC<ILogoProps> = ({ src, width, height, alt, style, onClick }) => {
  return (
    <Image
      onClick={onClick}
      src={src}
      width={width}
      height={height}
      alt={alt || "logo"}
      style={{ display: "flex", cursor: "pointer", ...style }}
    />
  );
};

export default Logo;
