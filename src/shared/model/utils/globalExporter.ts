import { unparse } from "papaparse";
import { downloadCSV } from "react-admin";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const globalExporter = (records: any[]) => {
  const csv =
    "\uFEFF" +
    unparse(records, {
      delimiter: ";",
      quotes: true,
    });
  downloadCSV(csv);
};
