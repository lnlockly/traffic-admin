import type { FC } from "react";
import { CreateButton, FilterButton, TopToolbar } from "react-admin";

import { CustomExportBtn } from "./ui";

interface Props {
  haveFilters?: boolean;
  haveCreate?: boolean;
}
export const CommonToolbar: FC<Props> = ({ haveFilters, haveCreate }) => {
  return (
    <TopToolbar
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {haveFilters && <FilterButton />}
      {haveCreate && (
        <CreateButton
          sx={{
            "@media (max-width: 900px)": {
              display: "none",
            },
          }}
        />
      )}
      <CustomExportBtn />
    </TopToolbar>
  );
};
