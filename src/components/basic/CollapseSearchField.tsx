"use client";

import { FC, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { getCommonTransitionFor } from "@/src/utils/mui";

interface ICollapseSearchFieldProps {
  collapsed: boolean;
  collapsedOnly?: boolean;
  setCollapsed?: (value: boolean) => void;
  onSearch: (text: string) => void;
}

const CollapseSearchField: FC<ICollapseSearchFieldProps> = ({
  collapsed,
  collapsedOnly,
  setCollapsed,
  onSearch,
}) => {
  const theme = useTheme();
  const [text, setText] = useState<string>("");
  const [animationEnd, setAnimationEnd] = useState<boolean>(true);

  return (
    <>
      {!collapsed && animationEnd && (
        <Box
          onClick={() => {
            setCollapsed?.(true);
            setAnimationEnd(false);
          }}
          sx={{
            display: "flex",
            paddingX: 3.5,
            paddingY: 1.75,
            cursor: "pointer",
          }}
        >
          <SearchIcon />
        </Box>
      )}

      <Box
        onAnimationEnd={() => setAnimationEnd(true)}
        sx={{
          display: "flex",
          backgroundColor: theme.palette.background.default,

          borderRadius: theme.shape.radius.xl,
          width: collapsed ? "100%" : 0,
          ...getCommonTransitionFor(["width"]),
        }}
      >
        {collapsed && (
          <>
            <InputBase
              value={text}
              onChange={(e) => setText(e.target.value)}
              sx={{
                paddingX: 2,
                width: "100%",
                color: theme.palette.grey[200],
                fontSize: (theme) => theme.typography.body2.fontSize,
                "& input::placeholder": {
                  color: theme.palette.grey[100],
                  opacity: 1,
                  fontSize: (theme) => theme.typography.body2.fontSize,
                },
              }}
              placeholder="Search our store"
            />

            <IconButton
              color="primary"
              sx={{ mr: 1 }}
              onClick={() => {
                onSearch(text);
                !collapsedOnly && setCollapsed?.(false);
              }}
            >
              <SearchIcon />
            </IconButton>
          </>
        )}
      </Box>
    </>
  );
};

export default CollapseSearchField;
