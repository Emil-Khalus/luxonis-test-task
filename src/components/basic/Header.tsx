"use client";

import { Box, Theme, Typography, useTheme } from "@mui/material";
import { FC, useState } from "react";
import Logo from "./Logo";
import logoImg from "../../../public/logo-white.svg";
import StoreButton from "./common/buttons/StoreButton";
import CollapseSearchField from "./CollapseSearchField";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "./IconButton";
import MobileMenu from "../composite/MobileMenu";
import { LUXONIS_STORE_LINK } from "@/src/utils/common-links";
import { replaceSpacesWithSymbol } from "@/src/utils/string";

const HEADER_MENU_MODE_BREAKPOINT = 1225;

const Header: FC = () => {
  const theme = useTheme();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const LINKS = [
    {
      label: "Products",
      href: "/",
    },
    {
      label: "Start with OAK",
      href: "/",
    },
    {
      label: "Our Technology",
      href: "/",
    },
    {
      label: "Industry Solutions",
      href: "/",
    },
    {
      label: "Developers",
      href: "/",
    },
    {
      label: "Blog",
      href: "/",
    },
    {
      label: "About Us",
      href: "/",
    },
  ];

  const handleSearch = (text: string) => {
    window.open(
      `${LUXONIS_STORE_LINK}/search?q=${replaceSpacesWithSymbol(text, "+")}`
    );
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backdropFilter: "blur(4px);",
          borderBottomRightRadius: (theme: Theme) => theme.shape.radius.xl,
          borderBottomLeftRadius: (theme: Theme) => theme.shape.radius.xl,
          maxWidth: (theme: Theme) => theme.mixins.rootLayout.maxWidth,
        }}
      >
        <Box sx={{ width: "100%", height: 25 }} />
        <Box
          component="header"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingY: 1.5,
            paddingX: { xs: 1.5, md: 3 },
            gap: 2.5,
            backgroundColor: (theme: Theme) => theme.palette.grey[300],
            height: (theme: Theme) => theme.mixins.appHeader.height,
            borderRadius: (theme: Theme) => theme.shape.radius.xl,
          }}
        >
          <Logo
            src={logoImg}
            width={115}
            height={32}
            alt={"Luxonis logo"}
            onClick={() => setIsSearchActive(false)}
          />
          {!isSearchActive && (
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
                [theme.breakpoints.down(HEADER_MENU_MODE_BREAKPOINT)]: {
                  display: "none",
                },
              }}
            >
              {LINKS.map((link, index) => (
                <Link key={index} href={link.href}>
                  <Typography variant="body2" fontWeight="medium">
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          )}
          <Box
            display="flex"
            width={isSearchActive ? "100%" : "unset"}
            alignItems="center"
            gap={1}
            justifyContent="end"
          >
            <Box
              sx={{
                width: isSearchActive ? "100%" : "unset",
                display: "flex",
                [theme.breakpoints.down(HEADER_MENU_MODE_BREAKPOINT)]: {
                  display: "none",
                },
              }}
            >
              <CollapseSearchField
                collapsed={isSearchActive}
                setCollapsed={setIsSearchActive}
                onSearch={handleSearch}
              />
            </Box>

            <StoreButton />
            <IconButton
              onClick={() => setOpenMobileMenu(true)}
              size="large"
              bgColor="primary"
              color="inherit"
              sx={{
                display: "none",
                [theme.breakpoints.down(HEADER_MENU_MODE_BREAKPOINT)]: {
                  display: "flex",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <MobileMenu
        links={LINKS}
        open={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
        onSearch={handleSearch}
      />
    </>
  );
};

export default Header;
