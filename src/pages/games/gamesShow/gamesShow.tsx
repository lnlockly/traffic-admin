import type { FC } from "react";
import { Show } from "react-admin";

import { GamesContent } from "./ui/gamesContent";

export const GamesShow: FC = () => {
  return (
    <>
      <Show>
        <GamesContent />
      </Show>
    </>
  );
};
