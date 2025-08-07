import { Toolbar } from "@mui/material";
import type { FC } from "react";
import { SaveButton } from "react-admin";

interface Props {
  className?: string;
}

export const EditToolBarWithoutDelete: FC<Props> = ({ className }) => {
  return (
    <Toolbar>
      <SaveButton />
    </Toolbar>
  );
};
