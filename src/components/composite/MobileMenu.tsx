import { LinkType } from "@/src/utils/common-types";
import { Box, Drawer, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import CollapseSearchField from "../basic/CollapseSearchField";

interface IMobileMenuProps {
  links: LinkType[];
  open: boolean;
  onClose: () => void;
  onSearch: (text: string) => void;
}

const MobileMenu: FC<IMobileMenuProps> = ({
  links,
  open,
  onClose,
  onSearch,
}) => {
  const theme = useTheme();
  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="bottom"
      sx={{
        "& .MuiDrawer-paper": {
          paddingY: 3,
          paddingX: 6,
          backgroundColor: theme.palette.secondary.main,
          borderTopLeftRadius: theme.shape.radius.xl,
          borderTopRightRadius: theme.shape.radius.xl,
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <Typography variant="h6" fontWeight="medium">
              {link.label}
            </Typography>
          </Link>
        ))}
        <CollapseSearchField collapsed onSearch={onSearch} />
      </Box>
    </Drawer>
  );
};

export default MobileMenu;
