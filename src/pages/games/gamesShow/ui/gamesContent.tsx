import { type FC } from "react";
import { SimpleShowLayout, TextField } from "react-admin";

import { GAMES_FIELDS_LABELS } from "../../const";

import { UsernameOrId } from "@/widgets/usernameOrId/usernameOrId";

export const GamesContent: FC = () => {
  return (
    <SimpleShowLayout>
      <TextField source="id" />
      <UsernameOrId />
      <TextField source="amount" label={GAMES_FIELDS_LABELS.AMOUNT} />
      <TextField source="multiplier" label={GAMES_FIELDS_LABELS.AMOUNT} />
      <TextField source="result" label={GAMES_FIELDS_LABELS.AMOUNT} />
    </SimpleShowLayout>
  );
};
