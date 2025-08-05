import type { FC } from "react";
import { ExportButton } from "react-admin";

import { globalExporter } from "@/model/utils/globalExporter";

export const CustomExportBtn: FC = () => {
  return <ExportButton exporter={globalExporter} maxResults={-1} />;
};
