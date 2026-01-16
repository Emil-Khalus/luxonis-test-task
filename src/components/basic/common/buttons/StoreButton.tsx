import { FC } from "react";
import { Button } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import { LUXONIS_STORE_LINK } from "@/src/utils/common-links";

const StoreButton: FC = () => {
  return (
    <Button
      variant="contained"
      startIcon={<StoreIcon />}
      onClick={() => window.open(LUXONIS_STORE_LINK, "_blank")}
    >
      Store
    </Button>
  );
};

export default StoreButton;
