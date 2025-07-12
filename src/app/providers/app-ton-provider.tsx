import { TonConnectUIProvider } from "@tonconnect/ui-react";
import type { HTMLAttributes } from "react";

import { MANIFEST_URL } from "@/model/consts/common";

export const AppTonProvider = ({
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <TonConnectUIProvider manifestUrl={MANIFEST_URL}>
      {children}
    </TonConnectUIProvider>
  );
};
