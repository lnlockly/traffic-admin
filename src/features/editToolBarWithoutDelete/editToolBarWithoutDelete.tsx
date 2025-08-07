import { Toolbar } from "@mui/material";
import type { FC } from "react";
import { SaveButton } from "react-admin";

export const EditToolBarWithoutDelete: FC = () => {
  return (
    <Toolbar>
      <SaveButton />
    </Toolbar>
  );
};
