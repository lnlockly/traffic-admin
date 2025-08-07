import type { FC } from "react";
import { CreateButton, FilterButton, TopToolbar } from "react-admin";

import { CustomExportBtn } from "./ui";

interface Props {
  haveFilters?: boolean;
  haveCreate?: boolean;
}
export const CommonToolbar: FC<Props> = ({ haveFilters, haveCreate }) => {
  return (
    <TopToolbar>
      {haveFilters && <FilterButton />}
      {haveCreate && <CreateButton />}
      <CustomExportBtn />
    </TopToolbar>
  );
};
