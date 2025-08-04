import type { FC } from "react";
import { FilterButton, TopToolbar } from "react-admin";

import { CustomExportBtn } from "./ui";

interface Props {
  haveFilters?: boolean;
}
export const CommonToolbar: FC<Props> = ({ haveFilters }) => {
  return (
    <TopToolbar>
      {haveFilters && <FilterButton />}
      <CustomExportBtn />
    </TopToolbar>
  );
};
